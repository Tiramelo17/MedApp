const inserirAlergia = async (elementoCausador, sintomas, observacoes) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var bodyAlergia = JSON.stringify({
        elementoCausador: elementoCausador,
        sintomas: sintomas,
        observacoes: observacoes
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: bodyAlergia,
        redirect: 'follow'
    }

    const res = await fetch(
        'https://api-ficha-medica.juniorkz13.repl.co/infoMedica/alergias/new',
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

const buscarAlergias = async () => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }

    const res = await fetch(
        'https://api-ficha-medica.juniorkz13.repl.co/infoMedica/alergias',
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

const deletarAlergia = async (_id) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    }

    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/alergias/delete/${_id}`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

const buscarAlergiaPorId = async (_id) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }

    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/alergias/${_id}`,
        requestOptions
    )

    const data = await res.json()
    console.log(data)
    return data
}

const atualizarAlergia = async (alergia) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var bodyAlergia = JSON.stringify({
        elementoCausador: alergia.elementoCausador,
        sintomas: alergia.sintomas,
        observacoes: alergia.observacoes
    })

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: bodyAlergia,
        redirect: 'follow'
    }

    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/alergias/update/${alergia._id}`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

export { inserirAlergia, buscarAlergias, deletarAlergia, atualizarAlergia, buscarAlergiaPorId }
