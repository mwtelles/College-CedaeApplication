import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#234c97',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: '95%',
    height: 50,
    padding: 10,
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 10,
  },
  inputArea: {
    marginTop: 10,
    marginBottom: 10,
    width: '95%',
    height: 150,
    padding: 10,
    backgroundColor: '#F9F9F9',
    borderWidth: 4,
    borderColor: "#F0F0F0",
    borderRadius: 10
  },
  icon: {
    width: "80%",
    height: "80%"
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  buttonFlip: {
    position: "absolute",
    bottom: 50,
    left: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "violet",
    margin: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  buttonTake: {
    position: "absolute",
    bottom: 50,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "violet",
    margin: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  contentPhoto: {
    flex: 1,
    margin: 10,
  },
  contentPhotoButton: {
    flex: 1,
    flexDirection: "row"
  },
  img: {
    width: "100%",
    height: "80%"
  },
  buttonClose: {
    position: "absolute",
    bottom: 50,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "violet",
    margin: 20,
    width: 90,
    height: 50,
    borderRadius: 20,
  },
  buttonConfirm: {
    position: "absolute",
    bottom: 50,
    left: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "violet",
    margin: 20,
    width: 90,
    height: 50,
    borderRadius: 20,
  },
  textSucess: {
    width: '80%',
    padding: 5,
    margin: 5,
    color: 'black',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
    alignItems: "center",
  },
  text: {
    color: '#fff',
    fontSize: 18,
  }
})