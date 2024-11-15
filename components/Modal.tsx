import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';



export default function ModalAdicionar({ modalVisible, setModalVisible, salvarNoBanco }) {

    const [nome, setNome] = React.useState('');
    const [quantidade, setQuantidade] = React.useState('');
    const [periodicidade, setPeriodicidade] = React.useState('');
    const [informacoesAdicionais, setInformacoesAdicionais] = React.useState('');

    const salvar = async() => {
        console.log(nome)
        console.log(quantidade)
        console.log(periodicidade)
        console.log(informacoesAdicionais)
        
       await salvarNoBanco({
            nome, 
            quantidade,
            periodicidade,
            informacoesAdicionais
        })

        setNome('')
        setQuantidade('')
        setPeriodicidade('')
        setInformacoesAdicionais('')


        setModalVisible(false)
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(false)
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Cadastre sua medicação</Text>

                    <TextInput
                        style={styles.input}
                        placeholder='Nome'
                        onChangeText={setNome}
                        value={nome}

                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Quantidade'
                        onChangeText={setQuantidade}
                        value={quantidade}

                    />


                    <TextInput
                        style={styles.input}
                        placeholder='Periodicidade'
                        onChangeText={setPeriodicidade}
                        value={periodicidade}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Informações adicionais'
                        onChangeText={setInformacoesAdicionais}
                        value={informacoesAdicionais}
                    />

                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={salvar}>
                        <Text style={styles.textStyle}>Salvar</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(false)}>
                        <Text style={styles.textStyle}>Cancelar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        borderRadius: 6,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#dadada',
        backgroundColor: '#f4f4f4'
    },

});

