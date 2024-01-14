document.addEventListener("DOMContentLoaded", function() {
  
    function addHTML(dataID,productImg,productCount){
        let cartProducts = document.querySelector( '.cart__products' );
        cartProducts.innerHTML += `
                <div class="cart__product" data-id="`+dataID+`">
                    <img class="cart__product-image" src=`+productImg+`>
                    <div class="cart__product-count">`+productCount+`</div>
                </div>`;
            }

    function clickAdd(clickedLink,quantityProductList){
        flag = true;        
        let productsBaskets = clickedLink.closest('.product');
        let cartContents = [...(document.querySelector('.cart__products')).children];
        if (cartContents.length > 0){
            for (el of cartContents){
                if(el.getAttribute('data-id') == productsBaskets.getAttribute('data-id')){
                    el.querySelector('.cart__product-count').textContent = Number(el.querySelector('.cart__product-count').textContent)+Number(quantityProductList.textContent);
                    flag = false;
                }
                    
            }
            if (flag){
                addHTML(productsBaskets.getAttribute('data-id'),productsBaskets.querySelector('img').src,quantityProductList.textContent);
            }
        }else{
            addHTML(productsBaskets.getAttribute('data-id'),productsBaskets.querySelector('img').src,quantityProductList.textContent);
        }

    }

    function clickHandler(clickedLink){
        let quantityProductList = clickedLink.parentNode.querySelector('.product__quantity-value')
        
        if(clickedLink.className == 'product__add'){
 
            clickAdd(clickedLink,quantityProductList)}
        //+
        if(clickedLink.className == 'product__quantity-control product__quantity-control_inc'){
            quantityProductList.textContent = Number(quantityProductList.textContent) + 1;
        }
        //-
        if(clickedLink.className == 'product__quantity-control product__quantity-control_dec'){
            if (Number(quantityProductList.textContent) > 1){
                quantityProductList.textContent = Number(quantityProductList.textContent) - 1;
            }  
        }
       
    }


    const clicButtons = document.querySelector('.products')
    
    clicButtons.addEventListener('click', (event) => {event.preventDefault()});
    clicButtons.addEventListener('click', click);
    function click(event){

        clickHandler(event.target)
    }

})