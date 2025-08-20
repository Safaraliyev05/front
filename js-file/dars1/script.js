// ma'lumot turlari
const person = {
    name: "sardor",
    surname: "safaraliyev",
    hobby: {
        sport: "football",
        game: "pubg"
    }
}

const subjects = ['math', 'history']
// Window open - alert, confirm, prompt

// alert("Hello")

// const isAccess = confirm("Are you above 18?")
// const age = +prompt("How old are you") // number
// const name = prompt("What is your name") // string


// Interpolatsiya backstick ``
// const firstName = "Sardor"
// const lastName = "Safaraliyev"
// const age = 20

// console.log(`My name is ${firstName}, my surname is ${lastName}, I'm ${age} years old`)


//Operatorlar + - / * %
const x = 7
const y = 3

// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y) // kasr bolish: 2.3333
// console.log(x % y) // qoldiq

// Matnga har qanday malumot turini qoshsak osha narsa bizda matn bolib matnga qoshiladi
// Ayirsak number

// console.log("hELLO" + null)

// increment x++, decrement y--
// postfix x++ y--, prefix --x --y Farqi: console.log() qiganda birinchi o'zgaruvchi chiqadi, ikkinchisida prefix ishlidi keyin o'zgaruvchi ishlidi
// && - va, || - yoki


// Shart operatori
// const num = 12
// if (num > 10) {
//     console.log("Katta")
// } else if (num < 12) {
//     console.log("kichik")
// } else {
//     console.log("Teng")
// }


// const color = "green"
// switch (color) {
//     case "green":
//         console.log("Go")
//         break
//     case "red":
//         console.log("Stop")
//         break
//     default:
//         console.log("dnx")
// }

// ternarniy operator
// const age = 18
// if              ()                     {}
// age < 20 ? console.log("Katta") : console.log("Kichik")


// Sikl
// let num = 1

// for (num; num <= 5; num++) {
// if (num == 2) {
// continue
// }
// console.log(num)
// }
// while (num <= 5) {
//     console.log(num)
//     num++
// }

// do {
//     console.log(num)
//     num++
// } while (
//     num <= 5
// )


const numberOfSeries = +prompt("Nechta serial ko'rgindiz")

const seriesDb = {
    count: numberOfSeries,
    series: {}
}

for (let i = 0; numberOfSeries > i; i++) {
    const a = prompt(`Serial nomi ${i}`)
    const b = +prompt(`Necha baho berasiz ${i}`)

    if (a != null && b != null && a != '' && b != '') {
        console.log('Done')
    } else {
        i--
    }
}