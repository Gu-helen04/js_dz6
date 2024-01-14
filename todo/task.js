document.addEventListener("DOMContentLoaded", function() {
    input = document.getElementById('task__input');
    function clickHandler(clickedLink){
        if (clickedLink.className == 'tasks__add')
            if (input.value != ''){
                addHTML(clickedLink);
            }
        if (clickedLink.className == 'task__remove'){
            delHTML(clickedLink.closest('.task'),clickedLink.closest('.tasks__list'));
        }
    }

    function delHTML(child,parent){
        parent.removeChild(child);
    }

    function addHTML(clickedLink){
        let tasksList = document.querySelector('.tasks__list');
        tasksList.innerHTML +=`
            <div class="task">
                <div class="task__title">
                    `+input.value+`
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`;
        input.value = '';    
    }


    const clicButtons = document.querySelector('.card');
    clicButtons.addEventListener('click', (event) => {event.preventDefault()});
    clicButtons.addEventListener('click', click);
    function click(event){
        clickHandler(event.target);
    }

    input.addEventListener('keypress',function(e){
    let key = e.code;
    if (key == 'Enter' && input.value != ''){
        clickHandler(input);
    }})

})