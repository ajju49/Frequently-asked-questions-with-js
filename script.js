const ABC = document.querySelectorAll('.faq-toggle')

ABC.forEach(XYZ => {
    XYZ.addEventListener('click', () => {
        XYZ.parentNode.classList.toggle('active')
    })
})

