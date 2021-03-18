class profileElements {

//login 

botãominhaconta = () => {return '.dropdown-login'}
botãologin = () => {return '.dropdown-menu > div > .active'}
email = () => {return ':nth-child(1) > .pure-material-textfield-outlined > span'}
senha = () => {return ':nth-child(2) > .pure-material-textfield-outlined > span'}
clicarlogin = () => {return '#loginfrm > .btn-primary'}
validarlogin = () => {return '.text-align-left'}

//profile
myprofile = () => {return ':nth-child(2) > .nav-link'}
address = () =>{return ':nth-child(4) > .form-group > .form-control'}
confirmaddress = () => {return ':nth-child(5) > .form-group > .form-control'}
city = () => {return ':nth-child(3) > :nth-child(1) > .form-group > .form-control'}
estado = () => {return ':nth-child(3) > :nth-child(2) > .form-group > .form-control'}
cep = () => {return ':nth-child(4) > :nth-child(1) > .form-group > .form-control'}
}

export default profileElements;