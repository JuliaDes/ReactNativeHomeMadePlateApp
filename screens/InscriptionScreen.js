import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
const InscriptionScreen = ({navigation}) => {
    
  return (
    <View style={styles.container}>
 
    <View>
    <Text style={{marginLeft:20, marginTop:20,
    }}>Email </Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre email"
      />

<Text style={{marginLeft:20, marginTop:20,
    }}>Mot de passe </Text>
<TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Entrez votre mot de passe"
      />
<Text style={{marginLeft:20, marginTop:20,
    }}>Confirmation du mot de passe </Text>
<TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Entrez votre mot de passe"
      />
       </View>

<View style={styles.button}>
       <TouchableOpacity
      onPress={() => {
        navigation.navigate("Inscrip");
      }}
      >
        <Text style={styles.text}>SUIVANT</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
}

export default InscriptionScreen;

const styles = StyleSheet.create({
    container: {
    flex:1,
     
    },

      text: {
        alignItems: 'center',
        color: "white",
            // fontFamily: "PrettywiseBold",
            fontSize: 20,
      },
    
    //   button: {
    // alignItems: "center",
    // marginTop: 20,
    // marginHorizontal: 70,
    // padding: 10,
    // borderColor: "orange",
    // borderRadius: 40,
    // borderWidth: 2,
    //   },

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



      
     
    
     });