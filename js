const surface = document.querySelector('.surface');
const car = document.querySelector('.car');
const btn = document.querySelector('.btn')
const btn2 = document.querySelector('.btn2')

btn.addEventListener('click', () =>{
    document.getElementById('sound').play()
    surface.classList.add('active')
})
btn2.addEventListener('click', ()=>{
    surface.classList.remove('active')
    document.getElementById('sound').pause()
})
