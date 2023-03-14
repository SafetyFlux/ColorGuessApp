import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import EndScreen from './screens/EndScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="StartScreen"
            component={StartScreen}
          />
          <Stack.Screen
            name="GameScreen"
            component={GameScreen}
          />
          <Stack.Screen
            name="EndScreen"
            component={EndScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
