import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_100Thin, Roboto_900Black } from '@expo-google-fonts/roboto';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './components/views/Home';
import Expenses from './components/views/Expenses';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_100Thin, Roboto_900Black
  });



  const Tab = createMaterialTopTabNavigator();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Expenses" component={Expenses} />
    </Tab.Navigator>
  );
}


