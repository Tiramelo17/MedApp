const inserirImplante = async (nome, tipo, data, observacoes) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var bodyImplante = JSON.stringify({
        nome: nome,
        tipo: tipo,
        data: data,
        observacoes: observacoes
    })
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: bodyImplante,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/implantes/new`,
        requestOptions
    )
    const dataI = await res.json()
    console.log(dataI)
    return dataI
}

const buscarImplantes = async () => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/implantes`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

const deletarImplante = async (_id) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/implantes/delete/${_id}`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

const atualizarImplante = async (implante) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var bodyImplante = JSON.stringify({
        nome: implante.nome,
        tipo: implante.tipo,
        data: implante.data,
        observacoes: implante.observacoes
    })
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: bodyImplante,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/implantes/update/${implante._id}`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

export { inserirImplante, buscarImplantes, deletarImplante, atualizarImplante }
