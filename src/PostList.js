import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight} from 'react-native';
import { TouchableOpacity } from 'react-native-web';



export function PostList(props) {
  

    const apiURL = 'https://jsonplaceholder.typicode.com/posts';

    const [postData, setPostData] = useState([]);



    
    useEffect(() => {

        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => {

                setPostData(data);
                console.log(data);

            })

    }, [])

  return (
    <View style={styles.container}>
        
     {postData.map((item, key)=>{
        if (key < 20) {
            return (<TouchableHighlight onPress={()=> props.navigation.navigate("PostDetail", {userid:item.id})}>
                <Text>{item.title}</Text> 
            </TouchableHighlight>)
        }
        
        
     })}
     

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
