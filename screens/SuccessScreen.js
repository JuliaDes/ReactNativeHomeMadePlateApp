import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
const SuccessScreen = ({}) => {
    
  return (
    <View style={styles.container}>
   
    <View>
<Image
        style={styles.tinyLogo}
        source={require('../assets/logoCeramic.png')}
      /></View>

<View style={styles.text}>  
<Text style={{textAlign
: 'center',
}}>Votre compte a été créé avec succès</Text>
</View> 

<View style={styles.button}>
       <TouchableOpacity>
        <Text style={styles.text}>SUIVANT</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
}

export default SuccessScreen;

const styles = StyleSheet.create({
    container: {
    flex:1,
     
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

      tinyLogo: {
        marginTop: 90,
        marginLeft: 120,
          width: 150,
          height: 150,
          resizeMode: "stretch",
        },
      
        text: {
          color: "white",
          // fontFamily: "PrettywiseBold",
          fontSize: 20,
        },
      
    
     });