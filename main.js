
const thirddiv = document.querySelector('#thirddiv')
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('#thirddiv').classList.add('dance')
        }
    })


})
observer.observe(document.querySelector("#thirddiv"))