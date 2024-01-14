document.addEventListener('DOMContentLoaded', function() {
    let allTooltips = document.querySelectorAll('.has-tooltip');


    function createTooltip(elementTooltip) {
        
        let Tooltip = document.createElement('div');
        Tooltip.textContent = elementTooltip.title;
        Tooltip.className = 'tooltip';
        elementTooltip.insertAdjacentElement('afterend', Tooltip);    
    }   

    function positionChange(Tooltip, elementTooltip) {

        let position = elementTooltip.dataset.position ? elementTooltip.dataset.position : "bottom";
        let placeElementTooltip = elementTooltip.getBoundingClientRect();
        let placeTooltip = Tooltip.getBoundingClientRect();

        switch (position) {
            
            case "top":
                Tooltip.style.left = `${placeElementTooltip.left}px`;
                Tooltip.style.top = `${placeElementTooltip.top - placeTooltip.height}px`;
                break;

            case "right":
                Tooltip.style.left = `${placeElementTooltip.left + placeElementTooltip.width}px`;
                Tooltip.style.top = `${placeElementTooltip.top}px`;
                break;

            case "bottom":
                Tooltip.style.left = `${placeElementTooltip.left}px`;
                Tooltip.style.top = `${placeElementTooltip.bottom}px`;
                break;

            case "left":
                Tooltip.style.left = `${placeElementTooltip.left - placeTooltip.width}px`;
                Tooltip.style.top = `${placeElementTooltip.top}px`;
                break;
        };
    }

    allTooltips.forEach((link) => {

        createTooltip(link);

        link.addEventListener('click', (e) => {
            
            let tooltip = e.currentTarget.nextElementSibling;
            let activeTooltip = document.querySelector('.tooltip_active');

            if (activeTooltip != tooltip) {
                if (activeTooltip) {
                    activeTooltip.classList.remove('tooltip_active');
                };
                tooltip.classList.add('tooltip_active');
                positionChange(tooltip, e.currentTarget);
            } else {
                tooltip.classList.remove('tooltip_active');
            };
            e.preventDefault();
        });
    });

    
    let windowEvents = ['scroll', 'resize'];

    windowEvents.forEach((event) => {

        window.addEventListener(event, () => {
            let activeTooltip = document.querySelector('.tooltip_active');
            if (activeTooltip) {
                activeTooltip.classList.remove('tooltip_active');        
            };
        });  
    });
})