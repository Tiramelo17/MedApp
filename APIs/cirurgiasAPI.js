const inserirCirurgia = async (nomeCirurgia, data, nomeHospital, razao, observacoes) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var bodyCirurgia = JSON.stringify({
        nomeCirurgia: nomeCirurgia,
        data: data,
        nomeHospital: nomeHospital,
        razao: razao,
        observacoes: observacoes
    })
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: bodyCirurgia,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/cirurgias/new`,
        requestOptions
    )
    const dataC = await res.json()
    console.log(dataC)
    return dataC
}

const buscarCirurgias = async () => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/cirurgias`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

const deletarCirurgia = async (_id) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/cirurgias/delete/${_id}`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

const atualizarCirurgia = async (cirurgia) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var bodyCirurgia = JSON.stringify({
        nomeCirurgia: cirurgia.nomeCirurgia,
        data: cirurgia.data,
        nomeHospital: cirurgia.nomeHospital,
        razao: cirurgia.razao,
        observacoes: cirurgia.observacoes
    })
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: bodyCirurgia,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/cirurgias/update/${cirurgia._id}`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

export { inserirCirurgia, buscarCirurgias, deletarCirurgia, atualizarCirurgia }
