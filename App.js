import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular, Roboto_100Thin, Roboto_900Black } from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
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
    <>
      <StatusBar />
      <NavigationContainer >
        <Tab.Navigator>
          <Tab.Screen name="Главная" component={Home} />
          <Tab.Screen name="Расходы" component={Expenses} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}


