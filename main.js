let input = document.querySelector('#input')
let btn = document.querySelector('.btn')

let age = 21;

btn.addEventListener('click', () => {
    let prom = new Promise((resolve, reject) => {
        if(input.value == age){
            resolve('Ураа! Вы угадали')
        }else{
            reject('Не угодали, попробуйте еще раз!')
        }
    }).then((res) => alert(res))
    .catch((rej) => alert(rej))
})


let input2 = document.querySelector('#input2')
let btn2 = document.querySelector('.btn2')
let word = 'JavaScript'

btn2.addEventListener('click', () => {
    let prom = new Promise((resolve, reject) => {
        if(input2.value == word.length){
            resolve('Вы угадали')
        }else{
            reject('Вы не угадали')
        }
    }).then((res) => alert(res))
    .catch((rej) => alert(rej))
    prom()
})
