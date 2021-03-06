import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, TextInput, Modal, Pressable, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { styles } from './src/styles/styles';
import OnCamera from './src/components/Camera/index';

export default function App() {

  const [dataUsuario, setdataUsuario] = useState({});
=======
import { StyleSheet, Text, View, TextInput, Modal, Pressable } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { styles } from './src/styles/styles';
import UseCam from './src/components/Camera/index';

export default function App() {

  const [dataUser, setDataUser] = useState({});
>>>>>>> main
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [descricao, setDescricao] = useState('');

  const [isVisible, setIsVisible] = useState(false);

<<<<<<< HEAD
  function saveInformationForm() {
    setIsVisible(!isVisible);
    setdataUsuario({cidade, 
=======
  function saveInfoForm() {
    setIsVisible(!isVisible);
    setDataUser({cidade, 
>>>>>>> main
      bairro, 
      rua, 
      numero, 
      descricao
    });
  }

<<<<<<< HEAD
  function closeModal() {
    setdataUsuario({})
    setCidade('');
=======
  function closeModalPhoto() {
    setDataUser({})
    setCidade('default');
>>>>>>> main
    setBairro(''); 
    setRua('');
    setNumero('');
    setDescricao('');
    setIsVisible(!isVisible);
  }

<<<<<<< HEAD
  const ContinueAlert = () =>
    Alert.alert('Você deseja continuar?', '', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Continuar', onPress: (saveInformationForm)},
    ]);

=======
>>>>>>> main
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Informe a Cidade </Text>
      <RNPickerSelect
            selectedValue={cidade}
            onValueChange={(cidade) => setCidade(cidade)} 
            items={[
                { label: 'Vassouras', value: 'Vassouras' },
                { label: 'Barra do Pirai', value: 'Barra do Pirai' },
                { label: 'Mendes', value: 'Mendes' },
                { label: 'Três Rios', value: 'Três Rios' },
                { label: 'Paraiba do Sul', value: 'Paraiba do Sul' },
                { label: 'Miguel Pereira', value: 'Miguel Pereira' },
                { label: 'Valença', value: 'Valença' },
                { label: 'Rio das Flores', value: 'Rio das Flores' },
            ]}
            style={picker}
        />
      <Text style={styles.text}>Informe o bairro</Text>
      <TextInput
        style={styles.input}
        value={bairro}
        onChangeText={setBairro}
      />
      <Text style={styles.text}>Informe a rua</Text>
      <TextInput
        style={styles.input}
        value={rua}
        onChangeText={setRua}
      />
      <Text style={styles.text}>Informe o numero</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />
      <Text style={styles.text}>Descrição</Text>
      <TextInput
        style={styles.inputArea}
        value={descricao}
        onChangeText={setDescricao}
      />
      <StatusBar style="auto" />
<<<<<<< HEAD
      <Pressable style={btn.button} onPress={ContinueAlert}>
      <Text style={btn.text}>Notificar</Text>
      </Pressable>
      <Modal transparent={true} visible={isVisible}>
        <OnCamera 
          dataUsuario={dataUsuario}
          closeModal={closeModal}
=======
      <Pressable style={btn.button} onPress={saveInfoForm}>
      <Text style={btn.text}>Notificar</Text>
      </Pressable>
      <Modal transparent={true} visible={isVisible}>
        <UseCam 
          dataUser={dataUser}
          closeModalPhoto={closeModalPhoto}
>>>>>>> main
        />
      </Modal>
    </View>
  );
}

const btn = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 125,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#F9F9F9',
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
  },
});

const picker = StyleSheet.create({
  inputIOS: {
      textAlign: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      backgroundColor: '#F9F9F9',
      marginTop: 10,
      marginLeft: 10,
      width: '95%',
      borderWidth: 1,
      borderColor: '#F0F0F0',
      borderRadius: 4,
      borderRadius: 10,
      color: 'black',
  },
  inputAndroid: {
      justifyContent: 'center',
      flexDirection: 'row',
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
  }
});