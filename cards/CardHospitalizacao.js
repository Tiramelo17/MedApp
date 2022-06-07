import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default ({ nomeHospital, data, numeroDias, razao, tratamento, observacoes, onDelete }) => (
    <View style={styles.container}>
        <View style={styles.cardBodyLeft}>
            <Text style={styles.h1}>Nome do Hospital</Text>
            <Text>{nomeHospital}</Text>
            <Text style={styles.h1}>Data</Text>
            <Text>{data}</Text>
            <Text style={styles.h1}>Número de Dias</Text>
            <Text>{numeroDias}</Text>
            <Text style={styles.h1}>Razão</Text>
            <Text>{razao}</Text>
            <Text style={styles.h1}>Tratamento</Text>
            <Text>{tratamento}</Text>
            <Text style={styles.h1}>Observações</Text>
            <Text>{observacoes}</Text>
        </View>
        <View style={styles.cardBodyRight}>
            <TouchableOpacity onPress={onDelete}>
                <MaterialIcons name='delete' size={30} color='black' />
            </TouchableOpacity>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
        padding: 10,
        backgroundColor: '#fff',
        elevation: 2
    },
    cardBodyLeft: {
        flex: 1,
        padding: 10
    },
    cardBodyRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    h1: {
        fontSize: 20,
        color: '#24CBAF'
    }
})
