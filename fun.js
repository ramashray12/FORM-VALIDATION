let section = document.querySelector("section")
let themeBtn = document.getElementById("btn")
let form = document.querySelector("form")
let input = document.querySelectorAll("input")
let feedBack = document.querySelector("#feedback")

themeBtn.addEventListener('click',()=>{
    if(themeBtn.innerText=='Dark'){
        themeBtn.innerText = "Light"
        section.style.backgroundColor = "black"
        form.style.color = "white"
        section.style.color = "white"
        input[0].style.borderBottom = "2px solid white"
        input[0].style.backgroundColor = "black"
        input[1].style.borderBottom = "2px solid white"
        input[1].style.backgroundColor = "black"
        input[0].style.color = "white"
        input[1].style.color = "white"
        
    }
    else{
        themeBtn.innerText = "Dark"
        themeBtn.style.background = "black"
        section.style.backgroundColor = "white"
        form.style.color = "black"
        form.style.border = "2px solid black"
        section.style.color = "black"
        input[0].style.borderBottom = "2px solid black"
        input[0].style.backgroundColor = "white"
        input[0].style.color = "black"
        input[1].style.color = "black"
        input[1].style.borderBottom = "2px solid black"
        input[1].style.backgroundColor = "white"
    }
})

function formHandle(){
    event.preventDefault()
    let username = input[0].value
    let password = input[1].value
    if(username == "scott" && password == "tiger"){
        form.style.boxShadow = "0px 0px 10px green"
        form.style.border = "2px solid green"
        input[0].style.borderBottom = "2px solid green"
        input[1].style.borderBottom = "2px solid green"
        feedBack.style.color = "green"
        feedBack.innerText = "Login Success"
    }
    else if(username == "" || password == ""){
        form.style.boxShadow = "0px 0px 10px red"
        form.style.border = "2px solid red"
        input[0].style.borderBottom = "2px solid red"
        input[1].style.borderBottom = "2px solid red"
        feedBack.style.color = "red"
        feedBack.innerText = "Please fill the form"
    }
    else{
        form.style.boxShadow = "0px 0px 10px red"
        form.style.border = "2px solid red"
        input[0].style.borderBottom = "2px solid red"
        input[1].style.borderBottom = "2px solid red"
        feedBack.style.color = "red"
        feedBack.innerText = "Username or Password is Incorrect"
    }
}