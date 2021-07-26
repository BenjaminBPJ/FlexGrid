let toogleNavStatus = false;

getBurgerMenu = () => {
    let toogle = document.querySelector('.bar-menu');
    let nav = document.querySelector('.nav-header');
    toogle.addEventListener('click', () => {
        if (toogleNavStatus === false) {
            nav.classList.remove('hidden');
            return toogleNavStatus = true;
        } else if (toogleNavStatus === true) {
            nav.classList.add('hidden');
            return toogleNavStatus = false;
        };
    });
};

getBurgerMenu();