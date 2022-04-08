import React from 'react';
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
        </SafeAreaView>
    );
}

export default Sucess;