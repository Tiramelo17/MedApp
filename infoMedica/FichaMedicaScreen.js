import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { Button, Dialog, Provider, Portal, TextInput } from 'react-native-paper'
import * as AlergiasAPI from '../APIs/alergiasAPI'
import * as CirurgiasAPI from '../APIs/cirurgiasAPI'
import * as CondicoesMedicasAPI from '../APIs/condicoesMedicasAPI'
import * as HospitalizacoesAPI from '../APIs/hospitalizacoesAPI'
import * as ImplantesAPI from '../APIs/implantesAPI'
import CardAlergia from '../cards/CardAlergia'
import CardCirurgia from '../cards/CardCirurgia'
import CardCondicoesMedicas from '../cards/CardCondicoesMedicas'
import CardHospitalizacao from '../cards/CardHospitalizacao'
import CardImplante from '../cards/CardImplante'

export default () => {
    const [visibleAlergia, setVisibleAlergia] = useState(false)
    const [listaAlergias, setListaAlergias] = useState([])
    const [elementoCausador, setElementoCausador] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [observacoesAlergia, setObservacoesAlergia] = useState('')
    const [visibleCirurgia, setVisibleCirurgia] = useState(false)
    const [listaCirurgias, setListaCirurgias] = useState([])
    const [nomeCirurgia, setNomeCirurgia] = useState('')
    const [dataCirurgia, setDataCirurgia] = useState('')
    const [nomeHospitalCirurgia, setNomeHospitalCirurgia] = useState('')
    const [razaoCirurgia, setRazaoCirurgia] = useState('')
    const [observacoesCirurgia, setObservacoesCirurgia] = useState('')
    const [visibleCondicaoMedica, setVisibleCondicaoMedica] = useState(false)
    const [listaCondicoesMedicas, setListaCondicoesMedicas] = useState([])
    const [nomeCondicaoMedica, setNomeCondicaoMedica] = useState('')
    const [dataCondicaoMedica, setDataCondicaoMedica] = useState('')
    const [observacoesCondicaoMedica, setObservacoesCondicaoMedica] = useState('')
    const [visibleHospitalizacao, setVisibleHospitalizacao] = useState(false)
    const [listaHospitalizacoes, setListaHospitalizacoes] = useState([])
    const [nomeHospitalizacao, setNomeHospitalizacao] = useState('')
    const [dataHospitalizacao, setDataHospitalizacao] = useState('')
    const [numeroDiasHospitalizacao, setNumeroDiasHospitalizacao] = useState('')
    const [razaoHospitalizacao, setRazaoHospitalizacao] = useState('')
    const [tratamentoHospitalizacao, setTratamentoHospitalizacao] = useState('')
    const [observacoesHospitalizacao, setObservacoesHospitalizacao] = useState('')
    const [visibleImplante, setVisibleImplante] = useState(false)
    const [listaImplantes, setListaImplantes] = useState([])
    const [nomeImplante, setNomeImplante] = useState('')
    const [dataImplante, setDataImplante] = useState('')
    const [observacoesImplante, setObservacoesImplante] = useState('')
    const [tipoImplante, setTipoImplante] = useState('')

    useEffect(() => {
        carregarAlergias()
        carregarCirurgias()
        carregarCondicoesMedicas()
        carregarHospitalizacoes()
        carregarImplantes()
    }, [])

    // Alergia
    const carregarAlergias = async () => {
        const alergias = await AlergiasAPI.buscarAlergias()
        setListaAlergias(alergias.response)
    }

    const adicionarAlergia = async () => {
        try {
            await AlergiasAPI.inserirAlergia(elementoCausador, sintomas, observacoesAlergia)
            const alergias = await AlergiasAPI.buscarAlergias()
            setListaAlergias(alergias.response)
            setVisibleAlergia(false)
            setElementoCausador('')
            setSintomas('')
            setObservacoesAlergia('')
        } catch (error) {
            console.log(error)
        }
    }

    const deletarAlergia = async (_id) => {
        try {
            await AlergiasAPI.deletarAlergia(_id)
            const alergias = await AlergiasAPI.buscarAlergias()
            setListaAlergias(alergias.response)
        } catch (error) {
            console.log(error)
        }
    }

    const itemListaAlergia = ({ item }) => (
        <CardAlergia {...item} onDelete={() => deletarAlergia(item._id)} />
    )

    // Cirurgia
    const carregarCirurgias = async () => {
        const cirurgias = await CirurgiasAPI.buscarCirurgias()
        setListaCirurgias(cirurgias.response)
    }

    const adicionarCirurgia = async () => {
        try {
            await CirurgiasAPI.inserirCirurgia(
                nomeCirurgia,
                dataCirurgia,
                nomeHospitalCirurgia,
                razaoCirurgia,
                observacoesCirurgia
            )
            const cirurgias = await CirurgiasAPI.buscarCirurgias()
            setListaCirurgias(cirurgias.response)
            setVisibleCirurgia(false)
            setNomeCirurgia('')
            setDataCirurgia('')
            setNomeHospitalCirurgia('')
            setRazaoCirurgia('')
            setObservacoesCirurgia('')
        } catch (error) {
            console.log(error)
        }
    }

    const deletarCirurgia = async (_id) => {
        try {
            await CirurgiasAPI.deletarCirurgia(_id)
            const cirurgias = await CirurgiasAPI.buscarCirurgias()
            setListaCirurgias(cirurgias.response)
        } catch (error) {
            console.log(error)
        }
    }

    const itemListaCirurgia = ({ item }) => (
        <CardCirurgia {...item} onDelete={() => deletarCirurgia(item._id)} />
    )

    // Condições Médicas
    const carregarCondicoesMedicas = async () => {
        const condicoesMedicas = await CondicoesMedicasAPI.buscarCondicoesMedicas()
        setListaCondicoesMedicas(condicoesMedicas.response)
    }

    const adicionarCondicaoMedica = async () => {
        try {
            await CondicoesMedicasAPI.inserirCondicaoMedica(nome, data, observacoes)
            const condicoesMedicas = await CondicoesMedicasAPI.buscarCondicoesMedicas()
            setListaCondicoesMedicas(condicoesMedicas.response)
            setVisibleCondicoesMedicas(false)
            setNomeCondicaoMedica('')
            setDataCondicaoMedica('')
            setObservacoesCondicaoMedica('')
        } catch (error) {
            console.log(error)
        }
    }

    const deletarCondicaoMedica = async (_id) => {
        try {
            await CondicoesMedicasAPI.deletarCondicaoMedica(_id)
            const condicoesMedicas = await CondicoesMedicasAPI.buscarCondicoesMedicas()
            setListaCondicoesMedicas(condicoesMedicas.response)
        } catch (error) {
            console.log(error)
        }
    }

    const itemListaCondicaoMedica = ({ item }) => (
        <CardCondicoesMedicas {...item} onDelete={() => deletarCondicaoMedica(item._id)} />
    )

    // Hospitalização
    const carregarHospitalizacoes = async () => {
        const hospitalizacoes = await HospitalizacoesAPI.buscarHospitalizacoes()
        setListaHospitalizacoes(hospitalizacoes.response)
    }

    const adicionarHospitalizacao = async () => {
        try {
            await HospitalizacoesAPI.inserirHospitalizacao(
                nomeHospitalizacao,
                dataHospitalizacao,
                numeroDiasHospitalizacao,
                razaoHospitalizacao,
                tratamentoHospitalizacao,
                observacoesHospitalizacao
            )
            const hospitalizacoes = await HospitalizacoesAPI.buscarHospitalizacoes()
            setListaHospitalizacoes(hospitalizacoes.response)
            setVisibleHospitalizacao(false)
            setNomeHospitalizacao('')
            setDataHospitalizacao('')
            setNumeroDiasHospitalizacao('')
            setRazaoHospitalizacao('')
            setTratamentoHospitalizacao('')
            setObservacoesHospitalizacao('')
        } catch (error) {
            console.log(error)
        }
    }

    const deletarHospitalizacao = async (_id) => {
        try {
            await HospitalizacoesAPI.deletarHospitalizacao(_id)
            const hospitalizacoes = await HospitalizacoesAPI.buscarHospitalizacoes()
            setListaHospitalizacoes(hospitalizacoes.response)
        } catch (error) {
            console.log(error)
        }
    }

    const itemListaHospitalizacao = ({ item }) => (
        <CardHospitalizacao {...item} onDelete={() => deletarHospitalizacao(item._id)} />
    )

    // Implante
    const carregarImplantes = async () => {
        const implante = await ImplantesAPI.buscarImplantes()
        setListaImplantes(implante.response)
    }

    const adicionarImplante = async () => {
        try {
            await ImplantesAPI.inserirImplante(
                nomeImplante,
                dataImplante,
                observacoesImplante,
                tipoImplante
            )
            const implante = await ImplantesAPI.buscarImplantes()
            setListaImplantes(implante.response)
            setVisibleImplante(false)
            setNomeImplante('')
            setDataImplante('')
            setObservacoesImplante('')
            setTipoImplante('')
        } catch (error) {
            console.log(error)
        }
    }

    const deletarImplante = async (_id) => {
        try {
            await ImplantesAPI.deletarImplante(_id)
            const implante = await ImplantesAPI.buscarImplantes()
            setListaImplantes(implante.response)
        } catch (error) {
            console.log(error)
        }
    }

    const itemListaImplante = ({ item }) => (
        <CardImplante {...item} onDelete={() => deletarImplante(item._id)} />
    )

    return (
        <Provider>
            <View>
                <Text style={styles.nome}>Alergias</Text>
                <FlatList
                    style={styles.lista}
                    data={listaAlergias}
                    renderItem={itemListaAlergia}
                    keyExtractor={(item) => item._id}
                />
                <Button
                    mode='text'
                    icon='plus'
                    color='#24CBAF'
                    onPress={() => setVisibleAlergia(true)}
                >
                    Adicionar Alergia
                </Button>
            </View>
            <Portal>
                <Dialog visible={visibleAlergia} onDismiss={() => setVisibleAlergia(false)}>
                    <Dialog.Title style={styles.titulo}>Adicionar Alergia</Dialog.Title>
                    <Dialog.Content>
                        <TextInput
                            mode='outlined'
                            label='Elemento Causador'
                            placeholder='Nome do Elemento'
                            value={elementoCausador}
                            onChangeText={(text) => setElementoCausador(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                        <TextInput
                            mode='outlined'
                            label='Sintomas'
                            placeholder='Sintomas da Alergia'
                            value={sintomas}
                            onChangeText={(text) => setSintomas(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                        <TextInput
                            mode='outlined'
                            label='Observações'
                            placeholder='Observações da Alergia'
                            value={observacoesAlergia}
                            onChangeText={(text) => setObservacoesAlergia(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button
                            icon='cancel'
                            color='#24CBAF'
                            onPress={() => setVisibleAlergia(false)}
                        >
                            Cancelar
                        </Button>
                        <Button icon='check' color='#24CBAF' onPress={() => adicionarAlergia()}>
                            Adicionar
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <View>
                <Text style={styles.nome}>Cirurgias</Text>
                <FlatList
                    style={styles.lista}
                    data={listaCirurgias}
                    renderItem={itemListaCirurgia}
                    keyExtractor={(item) => item._id}
                />
                <Button
                    mode='text'
                    icon='plus'
                    color='#24CBAF'
                    onPress={() => setVisibleCirurgia(true)}
                >
                    Adicionar Cirurgia
                </Button>
            </View>

            <Portal>
                <Dialog visible={visibleCirurgia} onDismiss={() => setVisibleCirurgia(false)}>
                    <Dialog.Title style={styles.titulo}>Adicionar Cirurgia</Dialog.Title>
                    <Dialog.Content>
                        <TextInput
                            mode='outlined'
                            label='Nome da Cirurgia'
                            placeholder='Nome da Cirurgia'
                            value={nomeCirurgia}
                            onChangeText={(text) => setNomeCirurgia(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                        <TextInput
                            mode='outlined'
                            label='Data da Cirurgia'
                            placeholder='Data da Cirurgia'
                            value={dataCirurgia}
                            onChangeText={(text) => setDataCirurgia(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                        <TextInput
                            mode='outlined'
                            label='Nome do Hospital'
                            placeholder='Nome do Hospital'
                            value={nomeHospitalCirurgia}
                            onChangeText={(text) => setNomeHospitalCirurgia(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                        <TextInput
                            mode='outlined'
                            label='Razão da Cirurgia'
                            placeholder='Razão da Cirurgia'
                            value={razaoCirurgia}
                            onChangeText={(text) => setRazaoCirurgia(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                        <TextInput
                            mode='outlined'
                            label='Observações'
                            placeholder='Observações da Cirurgia'
                            value={observacoesCirurgia}
                            onChangeText={(text) => setObservacoesCirurgia(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button
                            icon='cancel'
                            color='#24CBAF'
                            onPress={() => setVisibleCirurgia(false)}
                        >
                            Cancelar
                        </Button>
                        <Button icon='check' color='#24CBAF' onPress={() => adicionarCirurgia()}>
                            Adicionar
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <View>
                <Text style={styles.nome}>Condições Médicas</Text>
                <FlatList
                    style={styles.lista}
                    data={listaCondicoesMedicas}
                    renderItem={itemListaCondicaoMedica}
                    keyExtractor={(item) => item._id}
                />
                <Button
                    mode='text'
                    icon='plus'
                    color='#24CBAF'
                    onPress={() => setVisibleCondicaoMedica(true)}
                >
                    Adicionar Condição Médica
                </Button>
            </View>

            <Portal>
                <Dialog
                    visible={visibleCondicaoMedica}
                    onDismiss={() => setVisibleCondicaoMedica(false)}
                >
                    <Dialog.Title style={styles.titulo}>Adicionar Condição Médica</Dialog.Title>
                    <Dialog.Content>
                        <TextInput
                            mode='outlined'
                            label='Nome da Condição Médica'
                            placeholder='Nome da Condição Médica'
                            value={nomeCondicaoMedica}
                            onChangeText={(text) => setNomeCondicaoMedica(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                        <TextInput
                            mode='outlined'
                            label='Data da Condição Médica'
                            placeholder='Data da Condição Médica'
                            value={dataCondicaoMedica}
                            onChangeText={(text) => setDataCondicaoMedica(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                        <TextInput
                            mode='outlined'
                            label='Observações'
                            placeholder='Observações da Condição Médica'
                            value={observacoesCondicaoMedica}
                            onChangeText={(text) => setObservacoesCondicaoMedica(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button
                            icon='cancel'
                            color='#24CBAF'
                            onPress={() => setVisibleCondicaoMedica(false)}
                        >
                            Cancelar
                        </Button>
                        <Button
                            icon='check'
                            color='#24CBAF'
                            onPress={() => adicionarCondicaoMedica()}
                        >
                            Adicionar
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <View>
                <Text style={styles.nome}>Hospitalizações</Text>
                <FlatList
                    style={styles.lista}
                    data={listaHospitalizacoes}
                    renderItem={itemListaHospitalizacao}
                    keyExtractor={(item) => item._id}
                />
                <Button
                    mode='text'
                    icon='plus'
                    color='#24CBAF'
                    onPress={() => setVisibleHospitalizacao(true)}
                >
                    Adicionar Hospitalização
                </Button>
            </View>

            <Portal>
                <Dialog
                    visible={visibleHospitalizacao}
                    onDismiss={() => setVisibleHospitalizacao(false)}
                >
                    <Dialog.Title style={styles.titulo}>Adicionar Hospitalização</Dialog.Title>
                    <Dialog.Content>
                        <TextInput
                            mode='outlined'
                            label='Nome do Hospital'
                            placeholder='Nome do Hospital'
                            value={nomeHospitalizacao}
                            onChangeText={(text) => setNomeHospitalizacao(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                        <TextInput
                            mode='outlined'
                            label='Data da Hospitalização'
                            placeholder='Data da Hospitalização'
                            value={dataHospitalizacao}
                            onChangeText={(text) => setDataHospitalizacao(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                        <TextInput
                            mode='outlined'
                            label='Número de Dias'
                            placeholder='Número de Dias'
                            value={numeroDiasHospitalizacao}
                            onChangeText={(text) => setNumeroDiasHospitalizacao(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                        <TextInput
                            mode='outlined'
                            label='Razão da Hospitalização'
                            placeholder='Razão da Hospitalização'
                            value={razaoHospitalizacao}
                            onChangeText={(text) => setRazaoHospitalizacao(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                        <TextInput
                            mode='outlined'
                            label='Tratamento'
                            placeholder='Tratamento'
                            value={tratamentoHospitalizacao}
                            onChangeText={(text) => setTratamentoHospitalizacao(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                        <TextInput
                            mode='outlined'
                            label='Observações'
                            placeholder='Observações da Hospitalização'
                            value={observacoesHospitalizacao}
                            onChangeText={(text) => setObservacoesHospitalizacao(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button
                            icon='cancel'
                            color='#24CBAF'
                            onPress={() => setVisibleHospitalizacao(false)}
                        >
                            Cancelar
                        </Button>
                        <Button
                            icon='check'
                            color='#24CBAF'
                            onPress={() => adicionarHospitalizacao()}
                        >
                            Adicionar
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <View>
                <Text style={styles.nome}>Implantes</Text>
                <FlatList
                    style={styles.lista}
                    data={listaImplantes}
                    renderItem={itemListaImplante}
                    keyExtractor={(item) => item._id}
                />
                <Button
                    mode='text'
                    icon='plus'
                    color='#24CBAF'
                    onPress={() => setVisibleImplante(true)}
                >
                    Adicionar Implante
                </Button>
            </View>

            <Portal>
                <Dialog visible={visibleImplante} onDismiss={() => setVisibleImplante(false)}>
                    <Dialog.Title style={styles.titulo}>Adicionar Implante</Dialog.Title>
                    <Dialog.Content>
                        <TextInput
                            mode='outlined'
                            label='Nome do Implante'
                            placeholder='Nome do Implante'
                            value={nomeImplante}
                            onChangeText={(text) => setNomeImplante(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                        <TextInput
                            mode='outlined'
                            label='Data do Implante'
                            placeholder='Data do Implante'
                            value={dataImplante}
                            onChangeText={(text) => setDataImplante(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                        <TextInput
                            mode='outlined'
                            label='Tipo de Implante'
                            placeholder='Tipo de Implante'
                            value={tipoImplante}
                            onChangeText={(text) => setTipoImplante(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                        <TextInput
                            mode='outlined'
                            label='Observações'
                            placeholder='Observações do Implante'
                            value={observacoesImplante}
                            onChangeText={(text) => setObservacoesImplante(text)}
                            outlineColor='#24CBAF'
                            theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}}
                        />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button
                            icon='cancel'
                            color='#24CBAF'
                            onPress={() => setVisibleImplante(false)}
                        >
                            Cancelar
                        </Button>
                        <Button icon='check' color='#24CBAF' onPress={() => adicionarImplante()}>
                            Adicionar
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </Provider>
    )
}

const styles = StyleSheet.create({
    lista: {
        width: '100%',
        padding: 20
    },

    titulo: {
        fontSize: 20,
        color: '#24CBAF'
    },

    nome: {
        fontSize: 25,
        color: '#24CBAF',
        marginTop: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        paddingTop: 20,
        borderBottomColor: '#eaeaea',
        shadowColor: '#24CBAF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5
    }
})
