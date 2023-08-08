let num = Math.floor(Math.random()*10)
let change_button = document.getElementById("new")
let name_ = document.getElementById("name")
let img = document.querySelector("img")

    let city_button = document.getElementById("city")
    function city() {
    city_button.innerHTML = `${data.results[num].location.city}`
    }
    city_button.addEventListener('click', city)

    let email_button = document.getElementById("email")
    function email() {
    email_button.innerHTML = `${data.results[num].email}`
    }
    email_button.addEventListener('click', email)

    let username_button = document.getElementById("username")
    function username() {
    username_button.innerHTML = `${data.results[num].login.username}`
    }
    username_button.addEventListener('click', username)

    let age_button = document.getElementById("age")
    function age() {
    age_button.innerHTML = `${data.results[num].dob.age}`
    }
    age_button.addEventListener('click', age) 

function change() {
        num = Math.floor(Math.random()*10)
        name_.innerHTML = `${data.results[num].name.first} ${data.results[num].name.last}`
        img.src = `${data.results[num].picture.large}`; 
        city_button.innerHTML = "Click here to see city"
        email_button.innerHTML = "Click here to see email"
        username_button.innerHTML = "Click here to see username"
        age_button.innerHTML = "Click here to see age"
    }
change_button.addEventListener('click', change)
