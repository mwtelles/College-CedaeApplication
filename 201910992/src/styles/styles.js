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
    flex: 2,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    
  },
  buttonTake: {
    position: "absolute",
    bottom: 50,
    right: 160,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 20,
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  contentPhoto: {
    flex: 1,
    backgroundColor: "#000"
  },
  contentPhotoButton: {
    flex: 1,
    flexDirection: "row"
  },
  img: {
    width: "100%",
    height: "80%",
    marginBottom: 40,
  },
  buttonRepeat: {
    position: "absolute",
    top: 60,
    left: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  buttonConfirm: {
    position: "absolute",
    top: 60,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  selectInput: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#000",
    color: "#000",
    borderRadius: 6,
    margin: 5,
    padding: 5,
    fontWeight: "bold"
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 15,
  },
  resumeTitle: {
    paddingTop: 5,
    paddingBottom: 3,
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    alignItems: "center",
  },
  resume: {
    width: '80%',
    padding: 10,
    margin: 5,
    color: 'black',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
    alignItems: "center",
  },
  buttonReturn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 85,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#F9F9F9',
    marginTop: 30,
  },
  textReturn: {
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
  },
})