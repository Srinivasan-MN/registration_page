const names = document.getElementById('userName')
const password = document.getElementById('password')
const form = document.getElementById('loginForm')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if(names.value == '' || names.value == null){
        messages.push('Name is required')
    }
    if(password.value.length < 6){
        messages.push("Password Must Conatins atleast 6 character")
    }
    
    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

})

