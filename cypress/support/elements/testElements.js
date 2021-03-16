class testElements{
    
//primeiro cenário
botãominhaconta = () => {return '.dropdown-login'}
botãoinscrever = () => {return '.tr:nth-child(2)'}
firstname = () => {return '.col-md-6:nth-child(1) span'}
lastname = () => {return ':nth-child(2) > .form-group > .pure-material-textfield-outlined > span'}
telefone = () => {return ':nth-child(4) > .pure-material-textfield-outlined > span'}
email = () => {return ':nth-child(5) > .pure-material-textfield-outlined > span'}
password = () => {return ':nth-child(6) > .pure-material-textfield-outlined > span'}
confirmpassword = () => {return ':nth-child(7) > .pure-material-textfield-outlined > span'}
botãosignup = () => {return '.signupbtn'}
validarconta = () => {return '.text-align-left'}

//segundo cenário
emailjaexistente = () => {return '.alert'}

}

export default testElements;