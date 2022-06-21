import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
const InscripScreen = ({navigation}) => {
    
  return (
    <View style={styles.container}>
    <View>
    <Text style={{marginLeft:20, marginTop:20,
    }}>Civilité </Text>
      <TextInput
        style={styles.input}
        placeholder="Choississez votre civilité"
      />

<Text style={{marginLeft:20, marginTop:20,
    }}>Prénom </Text>
<TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Entrez votre prenom"
      />
<Text style={{marginLeft:20, marginTop:20,
    }}>Nom </Text>
<TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Entrez votre nom"
      />

<Text style={{marginLeft:20, marginTop:20,
    }}>Date de naissance </Text>
<TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Entrez votre date de naissance"
      />
       </View>


<View style={styles.button}>
       <TouchableOpacity
      onPress={() => {
        navigation.navigate("Success");
      }}
      >
        <Text style={styles.text}>TERMINÉ</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

export default InscripScreen;

const styles = StyleSheet.create({
    container: {
    flex:1,
     
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