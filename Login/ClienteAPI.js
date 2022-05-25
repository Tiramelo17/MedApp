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


export {loginCliente}