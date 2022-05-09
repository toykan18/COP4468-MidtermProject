import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/Home.js";
import {UserDetail} from "./src/UserDetail.js";
import {PostList} from "./src/PostList.js";


const Stack = createStackNavigator();

export default function App(props) {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="PostList"
          headerMode={{
            headerShown: false,
          }}
        >
          
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="UserDetail" component={UserDetail} />
              <Stack.Screen name="PostList" component={PostList} />
            </>
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
