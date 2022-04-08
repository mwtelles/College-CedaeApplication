import React, { useState, useEffect, useRef } from 'react';
import { Image, Modal, SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import { Camera } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import { styles } from '../../styles/styles';
import Sucess from '../pages/index';

function OnCamera({dataUsuario, closeModal}) {
  const ref = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [hasPermissionMedia, setHasPermissionMedia] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [captured, setCaptured] = useState(null);
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [openSucess, setOpenSucess] = useState(false);
  const [CollectData, setCollectData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');

      let { statusMedia } = await MediaLibrary.requestPermissionsAsync();
      setHasPermissionMedia(statusMedia === 'granted');

      let { statusLoc }  = await Location.requestForegroundPermissionsAsync();
      if (statusLoc !== 'granted') {
        setErrorMsg('Permissão negada');
      }
    })
    ();
  }, []);
  

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Permissão Negada</Text>;
  }

  async function take() {
    if (ref) {
      const opt = {
        quality: 0.8,
        flexOrientation: true,
        forceUpOrientation: true,
      }
      saveLocation();
      const data = await ref.current.takePictureAsync(opt);
      setCaptured(data.uri)
      setOpen(true)
      
    }
  }

  async function saveLocation() {
    
    let actualLocation = await Location.getCurrentPositionAsync({});
    setLocation(actualLocation.coords);
    
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
  }

  async function saveInformation() {
    const photo = (await MediaLibrary.createAssetAsync(captured)).uri;
    setCollectData({photo, location, dataUsuario});
    setOpenSucess(!openSucess);
    setOpen(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type} ref={ref}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonTake}
            onPress={take}>
            <Ionicons name="camera" size={36} color="black" />
          </TouchableOpacity>
        </View>
      </Camera>
      <Modal transparent={true} visible={open} >
        <View style={styles.contentPhoto}>
          <View style={styles.contentPhotoButton}>
            <TouchableOpacity style={styles.buttonRepeat} onPress={() => setOpen(false)}>
            <FontAwesome name="repeat" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonConfirm} onPress={saveInformation}>
            <Ionicons name="checkmark" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Image style={styles.img} source={{ uri: captured }} />
        </View>
      </Modal>
      <Modal transparent={true} visible={openSucess}>
        <Sucess 
          dataResume={CollectData}
          closeModal={closeModal}
        />
      </Modal>
    </SafeAreaView>
    
  );
}
export default OnCamera;