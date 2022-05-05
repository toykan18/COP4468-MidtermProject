import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/Home.js";
import {UserDetail} from "./src/UserDetail.js";


const Stack = createStackNavigator();

export default function App(props) {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          headerMode={{
            headerShown: false,
          }}
        >
          
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="UserDetail" component={UserDetail} />
            </>
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
