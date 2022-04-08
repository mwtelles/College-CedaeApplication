import React from 'react';
<<<<<<< HEAD
import {SafeAreaView, Text, Pressable, Alert} from 'react-native';
import { styles } from '../../styles/styles';

function Sucess({dataResume, closeModal}) {

    const NotificationAlert = () =>
    Alert.alert('Enviar Notificação!', 'Esta ação não pode ser desfeita, você quer enviar mesmo assim?', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Enviar', onPress: (closeModal)},
    ]);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}> Veja abaixo o resumo da sua ocorrência!</Text>
            <Text style={styles.resumeTitle}>Cidade</Text>
            <Text style={styles.resume}>{`${dataResume.dataUsuario.cidade}`}</Text>
            <Text style={styles.resumeTitle}>Bairro</Text>
            <Text style={styles.resume}>{`${dataResume.dataUsuario.bairro}`}</Text>
            <Text style={styles.resumeTitle}>Rua</Text>
            <Text style={styles.resume}>{`${dataResume.dataUsuario.rua}`}</Text>
            <Text style={styles.resumeTitle}>Número da Residência</Text>
            <Text style={styles.resume}>{`${dataResume.dataUsuario.numero}`}</Text>
            <Text style={styles.resumeTitle}>Descrição</Text>
            <Text style={styles.resume}>{`${dataResume.dataUsuario.descricao}`}</Text>
            <Text style={styles.resumeTitle}>Localização</Text>
            <Text style={styles.resume}>{`Latitude: ${dataResume.location.latitude}, Longitude: ${dataResume.location.longitude}`}</Text>
            <Text style={styles.resumeTitle}>Foto do Relógio</Text>
            <Text style={styles.resume}>{`${dataResume.photo}`}</Text>

            <Pressable style={styles.buttonReturn} onPress={NotificationAlert}>
            <Text style={styles.textReturn}>Desejo Notificar</Text>
            </Pressable>
=======
import {SafeAreaView, Text, Button} from 'react-native';
import { styles } from '../../styles/styles';


function Sucess({datas, closeModalPhoto}) {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase'}}>Obrigado por cadastrar a notificacao! Segue os dados da ocorrencia</Text>
            <Text style={styles.textSucess}>{`Cidade: ${datas.dataUser.cidade}`}</Text>
            <Text style={styles.textSucess}>{`Bairro: ${datas.dataUser.bairro}`}</Text>
            <Text style={styles.textSucess}>{`Rua: ${datas.dataUser.rua}`}</Text>
            <Text style={styles.textSucess}>{`Numero: ${datas.dataUser.numero}`}</Text>
            <Text style={styles.textSucess}>{`Descricao: ${datas.dataUser.descricao}`}</Text>
            <Text style={styles.textSucess}>{`Localização: Latitude=${datas.location.latitude}, Longitude=${datas.location.longitude}`}</Text>
            <Text style={styles.textSucess}>{`Foto: ${datas.photo}`}</Text>
            <Button
                onPress={closeModalPhoto}
                title="Fechar Notificação"
                color="#841584"
            />
>>>>>>> main
        </SafeAreaView>
    );
}

export default Sucess;