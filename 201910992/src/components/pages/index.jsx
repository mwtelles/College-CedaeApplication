import React from 'react';
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
        </SafeAreaView>
    );
}

export default Sucess;