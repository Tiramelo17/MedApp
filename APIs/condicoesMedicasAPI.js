const inserirCondicaoMedica = async (nome, dataDiagnose, observacoes) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var bodyCondicaoMedica = JSON.stringify({
        nome: nome,
        dataDiagnose: dataDiagnose,
        observacoes: observacoes
    })
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: bodyCondicaoMedica,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/condicoesMedicas/new`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

const buscarCondicoesMedicas = async () => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/condicoesMedicas`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

const deletarCondicaoMedica = async (_id) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/condicoesMedicas/delete/${_id}`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

const atualizarCondicaoMedica = async (condicaoMedica) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var bodyCondicaoMedica = JSON.stringify({
        nome: condicaoMedica.nome,
        dataDiagnose: condicaoMedica.dataDiagnose,
        observacoes: condicaoMedica.observacoes
    })
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: bodyCondicaoMedica,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/condicoesMedicas/update/${condicaoMedica._id}`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

export {
    inserirCondicaoMedica,
    buscarCondicoesMedicas,
    deletarCondicaoMedica,
    atualizarCondicaoMedica
}
