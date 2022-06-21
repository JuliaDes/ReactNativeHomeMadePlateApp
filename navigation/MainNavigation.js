import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import HomeScreen from '../screens/HomeScreen';
import SuccessScreen from '../screens/SuccessScreen';
import InscripScreen from '../screens/InscripScreen';
import InscriptionScreen from '../screens/InscriptionScreen';
import LoginScreen from '../screens/LoginScreen';



export default function MainNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    <Stack.Screen name="Inscrip" component={InscripScreen} />
      <Stack.Screen name="Inscription" component={InscriptionScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
    </NavigationContainer>

  );
};

// #e8e4d9 - beige