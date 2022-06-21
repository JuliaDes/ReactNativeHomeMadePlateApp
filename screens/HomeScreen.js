import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function App({navigation}) {
  
return(
<View style={styles.container}>
  <ImageBackground source={require("../assets/font.jpg")} resizeMode="cover" style={styles.image
  }>
    <View>
<Image
        style={styles.tinyLogo}
        source={require('../assets/logoCeramic.png')}
      /></View>
  
<TouchableOpacity
        style={styles.button1}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.text}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button2}
        onPress={() => {
          navigation.navigate("Inscription");
        }}
      >
        <Text style={styles.text}>S'inscrire</Text>
      </TouchableOpacity>

</ImageBackground>
</View>
)
}
 const styles = StyleSheet.create({
container: {
flex:1,
 
},
tinyLogo: {
  marginTop: 50,
  marginBottom:40,
  marginHorizontal:100,
  marginLeft: 10,
    width: 500,
    height: 500,
    resizeMode: "stretch",
  },

  image:{
    width: 390,
    height: 844,
  },

  // text: {
  //   alignItems: 'center',
  // },

  button1: {
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 70,
    padding: 10,
    borderColor: "#3A6065",
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: '#719B99',
   
      },

      button2: {
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: 70,
        padding: 10,
        borderColor: "#719B99",
        borderRadius: 15,
        borderWidth: 2,
        backgroundColor: '#3A6065',
          },

          text: {
            color: "white",
            // fontFamily: "PrettywiseBold",
            fontSize: 20,
          },
    

 });





  
   