import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/Home.js";
import {UserDetail} from "./src/UserDetail.js";
import {PostList} from "./src/PostList.js";
import {PostDetail} from "./src/PostDetail.js";
import {AlbumList} from "./src/AlbumList";
import {PhotoList} from "./src/PhotoList";
import {ToDoList} from "./src/ToDoList";
const Stack = createStackNavigator();

export default function App(props) {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ToDoList"
          headerMode={{
            headerShown: false,
          }}
        >
          
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="UserDetail" component={UserDetail} />
              <Stack.Screen name="PostList" component={PostList} />
              <Stack.Screen name="PostDetail" component={PostDetail} />
              <Stack.Screen name="AlbumList" component={AlbumList} />
              <Stack.Screen name="PhotoList" component={PhotoList} />
              <Stack.Screen name="ToDoList" component={ToDoList} />
            </>
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
