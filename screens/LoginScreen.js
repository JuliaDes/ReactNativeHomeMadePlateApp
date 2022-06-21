import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
const LoginScreen = ({navigation}) => {
    
  return (
    <View style={styles.container}>
 <View>
<Image
        style={styles.tinyLogo}
        source={require('../assets/favicon.png')}
      /></View>
   

    <View>
    <Text style={{marginLeft:20, marginTop:20,
    }}>Email </Text>
      <TextInput
        style={styles.input}
        placeholder="Entrer votre email"
      />
<Text style={{marginLeft:20, marginTop:20,
    }}>Mot de passe </Text>
<TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Entrer votre mot de passe"
      />
       </View>

<View style={styles.button}>
       <TouchableOpacity
        onPress={""}
      >
        <Text style={styles.text}>Se connecter</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.row}>
    <Text style={{
          fontWeight: 'bold',
}}>Pas encore inscrit ?  </Text>
<Text style={{
}} onPress={() => {
  navigation.navigate("Inscription");
}}
>Créer un compte </Text>
      </View>

    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
    flex:1,
     
    },
    tinyLogo: {
      marginTop: 90,
      marginLeft: 120,
        width: 150,
        height: 150,
        resizeMode: "stretch",
      },
    
      image:{
        width: 390,
        height: 844,
      },
    
      text: {
        color: 'white',
        alignItems: 'center',
      },
    
      button: {
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: 70,
        padding: 10,
        borderColor: "#3A6065",
        borderRadius: 15,
        borderWidth: 2,
        backgroundColor: '#719B99',
      },

      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
      },
      row: {
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
      },

      text: {
        color: "white",
        // fontFamily: "PrettywiseBold",
        fontSize: 20,
      },

     
    
     });
    
    