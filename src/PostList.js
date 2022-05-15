import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight,SafeAreaView,Button} from 'react-native';



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
    <SafeAreaView style={styles.container}>
        <View style={styles.listContainer}>
     {postData.map((item, key)=>{
        if (key < 20) {
            return (<TouchableHighlight key={key} onPress={()=> props.navigation.navigate("PostDetail", {postid:item.id})}>
                <Text style={styles.font}>{item.title}</Text> 
            </TouchableHighlight>)
            
        }
        
     })}
     <View style={styles.buttonContainer}>
        <Button onPress={()=> props.navigation.navigate("Home")} title="See User List" color={"black"}></Button>
        </View>
        </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor:"#51a871",
  },
  buttonContainer:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"green",
    height:70,
    width:200,
    marginTop:50,
   marginLeft:100,
   borderRadius:10,
   
  },
  listContainer: {
    display:"flex",
    marginTop:30,
    height:600,
    width:415,
    
    
  },
  font:{
  fontWeight:'bold',
  margin:1,
  borderWidth:2,
  

  },
});
