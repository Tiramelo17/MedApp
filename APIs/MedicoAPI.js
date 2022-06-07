const inserirMedico = async (nome, crm, especialidade, hospital, telefone, email) => {
  var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var raw = JSON.stringify({
      nome: nome,
      crm: crm,
      especialidade: especialidade,
      nomeHospital: hospital,
      telefone: telefone,
      email: email
    })
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }
    const res = await fetch("https://api-medico.sarahsilva1.repl.co/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))
    const data = await res.json()
    console.log(data)
    return data
}

const buscarMedico = async () => {
  var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-medico.sarahsilva1.repl.co`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

const deletarMedico = async (_id) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-medico.sarahsilva1.repl.co/${_id}`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

const atualizarMedico = async (medico) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var bodyMedico = JSON.stringify({
      nome: medico.nome,
      crm: medico.crm,
      especialidade: medico.especialidade,
      nomeHospital: medico.hospital,
      telefone: medico.telefone,
      email: medico.email
    })
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: bodyMedico,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-medico.sarahsilva1.repl.co/${medico.crm}`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

export { inserirMedico, buscarMedico, deletarMedico, atualizarMedico }