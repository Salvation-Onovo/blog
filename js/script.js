
const email = document.getElementById('email');

// let user_port = window.location.port
let emailsArray = [];

document.getElementById('subscribeform').onsubmit = (e) => {
    e.preventDefault()
    if (window.sessionStorage) {
        emailsArray.push(email.value)
        sessionStorage.setItem('emails', emailsArray)
        alert('Subscribed succesfully!')
    } else {
        alert('Your browser do not support web storage!')
    }
}