const button = document.querySelector("button")
const copyPassword = document.querySelector(".copy")
const input = document.querySelector("input")

const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCases = "abcedfghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = ">£#$§{[]}.,;-_"
const allChars = upperCases + lowerCases + numbers + symbols

let length = 12

button.addEventListener("click", () => {
    let password = ""
    while (password.length<length){
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    input.value = password
})

copyPassword.addEventListener("click", () => {
    input.select()
    document.execCommand("copy")
})