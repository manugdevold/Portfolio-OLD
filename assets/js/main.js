//Menu show.
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener("click", ()=>{
            nav.classList.toggle("show");
        });
    }
}
showMenu("nav-toggle","nav-menu");

//Active and remove border bottom menu.
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(n => n.addEventListener("click", linkAction));

function linkAction(){
    navLink.forEach(n => n.classList.remove("active"));
    this.classList.add("active");

    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
}

//Scroll reveal animation.
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1500,
    reset: true
})

//Scroll reveal HOME.
sr.reveal(".home__title",{});
sr.reveal(".button",{delay: 200});
sr.reveal(".home__img",{delay: 400});
sr.reveal(".home__social-icon",{interval: 200});

//Scroll reveal ABOUT.
sr.reveal(".about__img",{});
sr.reveal(".about__subtitle",{delay: 200});
sr.reveal(".about__text",{delay: 400});

//Scroll reveal SKILLS.
sr.reveal(".skills__subtitle",{});
sr.reveal(".skills__text",{delay: 200});
sr.reveal(".skills__data",{interval: 400});
sr.reveal(".skills__img",{delay: 400});

//Scroll reveal PROJECTS.
sr.reveal(".projects__img",{interval: 200});

//Scroll reveal CONTACT.
sr.reveal(".contact__input",{interval: 200});
