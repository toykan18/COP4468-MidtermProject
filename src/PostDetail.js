import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight,SafeAreaView} from 'react-native';



export function PostDetail(props) {
  

    const apiURL = `https://jsonplaceholder.typicode.com/posts/${props.route.params.postid}`;

    const [postData, setPostData] = useState([]);



    
    useEffect(() => {

        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => {

                setPostData(data);
                

            })

    }, [])

  return (
    <SafeAreaView style={styles.container}>
        <Text>User ID:{postData.userId}</Text>
        <Text>ID:{postData.id}</Text>
        <Text>Title:{postData.title}</Text>
        <Text>Body:{postData.body}</Text>
     

      <StatusBar style="auto" />
    </SafeAreaView>
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
