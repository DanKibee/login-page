let login = () => {
    let email_field = document.getElementById('email')
    let email =email_field.value
    console.log(email)
    let pass_field = document.getElementById('pass')
    let pass = pass_field.value
    if (email == 'xyz@gmail.com' && pass=='123xyz#') {
        document.getElementById('result').innerHTML='access accepted'
    }
    else { 
    document.getElementById('result').innerHTML='incorrect login details'
    }
 }