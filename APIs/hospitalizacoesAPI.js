const inserirHospitalizacao = async (
    nomeHospital,
    data,
    numeroDias,
    razao,
    tratamento,
    observacoes
) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var bodyHospitalizacao = JSON.stringify({
        nomeHospital: nomeHospital,
        data: data,
        numeroDias: numeroDias,
        razao: razao,
        tratamento: tratamento,
        observacoes: observacoes
    })
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: bodyHospitalizacao,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/hospitalizacoes/new`,
        requestOptions
    )
    const dataH = await res.json()
    console.log(dataH)
    return dataH
}

const buscarHospitalizacoes = async () => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/hospitalizacoes`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

const deletarHospitalizacao = async (_id) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/hospitalizacoes/delete/${_id}`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

const atualizarHospitalizacao = async (hospitalizacao) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var bodyHospitalizacao = JSON.stringify({
        nomeHospital: hospitalizacao.nomeHospital,
        data: hospitalizacao.data,
        numeroDias: hospitalizacao.numeroDias,
        razao: hospitalizacao.razao,
        tratamento: hospitalizacao.tratamento,
        observacoes: hospitalizacao.observacoes
    })
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: bodyHospitalizacao,
        redirect: 'follow'
    }
    const res = await fetch(
        `https://api-ficha-medica.juniorkz13.repl.co/infoMedica/hospitalizacoes/update/${hospitalizacao._id}`,
        requestOptions
    )
    const data = await res.json()
    console.log(data)
    return data
}

export {
    inserirHospitalizacao,
    buscarHospitalizacoes,
    deletarHospitalizacao,
    atualizarHospitalizacao
}
