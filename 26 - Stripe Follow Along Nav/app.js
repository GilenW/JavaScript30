const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(){
    this.classList.add('trigger-enter');

    setTimeout(() => { //you can't use function(){} because arrow function can inherit the parameter from the parent function.
        // console.log( this);
        if(this.classList.contains('trigger-enter')){
            this.classList.add('trigger-enter-active');

        }
    }, 150)

    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    console.log(dropdown);
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    console.log(dropdownCoords);
    console.log(navCoords);
    
    const coords = {
        width: dropdownCoords.width,
        height:dropdownCoords.height,
        top:dropdownCoords.top - navCoords.top,
        left:dropdownCoords.left - navCoords.left
    }
    background.style.width = `${dropdownCoords.width}px`;
    background.style.height = `${dropdownCoords.height}px`;
    background.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

}

function handleLeave(){
    this.classList.remove('trigger-enter','trigger-enter-active');
    background.classList.remove('open');

}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
