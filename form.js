form.addEventListener('submit',e=>{
    e.preventDefault()
    validInputs()

})

const setError=(element,message)=>{
    const input_Controls=element.parentElement;
    errorDisplay=input_Controls.querySelector('.error')
    errorDisplay.innerText=message;
    input_Controls.classList.add('error')
    input_Controls.classList.remove('success')
}

const setSuccess=element=>{
    const input_Controls=element.parentElement
    const errorDisplay=input_Controls.querySelector('.error')
    errorDisplay.innerText=""
    input_Controls.classList.add('success')
    input_Controls.classList.remove('error')
}

const isValidEmail=(email)=>{
    const res=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return res.test(String(email).toLowerCase())
}

const validInputs=()=>{
    const userName=username.value
    const userPassword=password.value
    const userPassword2=password2.value
    const userEmail=email.value



    if(userName==""){
        setError(username,"Username is required")
    }else{
        setSuccess(username)
    }

    if(userEmail==""){
        setError(email,"email is required")
    }

    else if(!isValidEmail(userEmail)){
        setError(email,"Provide valid Email")
    }
    else{
        setSuccess(email)

    }


    if(userPassword==""){
        setError(password,"Password is required")
    }else if(userPassword.length <8){
        setError(password,"Password must be 8 Char")
    }else{
        setSuccess(password)
    }

    if(userPassword2==""){
        setError(password2,"Plzz confrim password")
    }else if(userPassword2!==userPassword){
        setError(password2,"password didn't match")
    }else{
        setSuccess(password2)
    }
}
