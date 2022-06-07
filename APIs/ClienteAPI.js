const loginCliente = async (email,senha) => {

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var bodyCliente = JSON.stringify({
  "email": email,
  "senha": senha
});

 console.log(bodyCliente)

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: bodyCliente,
  redirect: 'follow'
};

const res = await fetch("https://APIUsuario.tiramelo17.repl.co/login/usuario", requestOptions)

 return res.json()
}



const cadastroCliente = async (cliente) => {
console.log(cliente)
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var bodyCliente = JSON.stringify({
  "nome": cliente.nome,
  "cpf": cliente.cpf,
  "email": cliente.email,
  "sexo": cliente.sexo,
  "senha": cliente.senha,
  "rua": cliente.rua,
  "bairro": cliente.bairro,
  "numeroCasa": cliente.numeroCasa,
  "telefone": cliente.cel
});

 console.log(bodyCliente)

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: bodyCliente,
  redirect: 'follow'
};

const res = await fetch("https://APIUsuario.tiramelo17.repl.co/cadastrar/usuario", requestOptions)

 return res.json()
}





export {loginCliente,cadastroCliente}