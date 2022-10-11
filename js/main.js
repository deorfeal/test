btn = document.querySelectorAll('.main__above-btn')[0]
wrapper = document.querySelectorAll('.wrapper')[0]

console.log(btn)
console.log(wrapper)

btn.addEventListener('click', () => {
    wrapper.classList.toggle('wrapper-menu')
})