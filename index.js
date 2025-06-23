document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })

    document.querySelectorAll('nav a').forEach(a => {
        a.classList.remove('bg-gray-800', 'px-3', 'py-2', 'rounded-lg');
        a.classList.add('hover:text-blue-400');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('bg-gray-800', 'px-3', 'py-2', 'rounded-lg');
            a.classList.remove('hover:text-blue-400');
        }
    })
});