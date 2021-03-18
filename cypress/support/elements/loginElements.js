class loginElements{

//login   
botãominhaconta = () => {return '.dropdown-login'}
botãologin = () => {return '.dropdown-menu > div > .active'}
email = () => {return ':nth-child(1) > .pure-material-textfield-outlined > span'}
senha = () => {return ':nth-child(2) > .pure-material-textfield-outlined > span'}
clicarlogin = () => {return '#loginfrm > .btn-primary'}
validarlogin = () => {return '.text-align-left'}


//login incorreto
mensagemdeerrologin = () => {return '.alert'}

//logout
minhaconta = () => {return '#dropdownCurrency'}
logout = () => {return '.tr:nth-child(2)'}
validarlogout = () => {return 'h3'} 


//Resetar Senha
botãoforgetpassword = () => {return '.btn-warning'}
emailreset = () => {return '#resetemail'}
botãoreset = () => {return '.input-group-btn > .btn'}
validarmensagemreset = () => {return '.alert'}
}
export default loginElements;

