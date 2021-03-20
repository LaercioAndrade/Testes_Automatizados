class catalogoElements{

//login    
botãominhaconta = () => {return '.dropdown-login'}
botãologin = () => {return '.dropdown-menu > div > .active'}
email = () => {return ':nth-child(1) > .pure-material-textfield-outlined > span'}
senha = () => {return ':nth-child(2) > .pure-material-textfield-outlined > span'}
clicarlogin = () => {return '#loginfrm > .btn-primary'}
validarlogin = () => {return '.text-align-left'}

//home
acessarhome = () => {return '.main-nav-menu > :nth-child(1) > li > a'}
destino = () => {return '#s2id_autogen16 > .select2-choice > .select2-chosen'}
selecionardestino = () => {return '.select2-highlighted > .select2-result-label'}
botãoprocurar = () => {return '#hotels > .tab-inner > .form-search-main-01 > form > .form-inner > .gap-10 > .col-lg-2 > .btn'}
selecionarhotel = () => {return '.product-long-item:nth-child(1) h5 > a'}
whishlist = () => {return '.wishtext'}
conta = () => {return '.dropdown-menu > div > .active'}
acessarwishlist = () => {return ':nth-child(3) > .nav-link'}
}
export default catalogoElements;