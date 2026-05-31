const counters = document.querySelectorAll('.counter');

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute('data-target');

        let count = 0;

        const updateCounter = () => {

            const increment = target / 50;

            if(count < target){

                count += increment;

                counter.innerText = Math.ceil(count);

                setTimeout(updateCounter, 30);

            } else {

                if(target === 100){
                    counter.innerText = "100%";
                }
                else if(target === 24){
                    counter.innerText = "24/7";
                }
                else{
                    counter.innerText = target + "+";
                }

            }

        };

        updateCounter();

    });

};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            startCounters();

            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector('.stats-section'));
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

    reveals.forEach(reveal => {

        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            reveal.classList.add('active');
        }

    });

});

window.addEventListener("load", () => {

    setTimeout(() => {

        document
        .getElementById("preloader")
        .classList
        .add("preloader-hide");

    }, 2000);

});

