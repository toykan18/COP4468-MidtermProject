import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, FlatList, TouchableHighlight,SafeAreaView,Button} from 'react-native';





export function ToDoList(props) {
  

    const apiURL = 'https://jsonplaceholder.typicode.com/todos';

    const [listData, setlistData] = useState([]);

    

    
    useEffect(() => {

        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => {

                setlistData(data);
                

            })

    }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
       <FlatList
                  data={listData
                    }
                  renderItem={({ item }) => (
                    <>
                    
                      <View style={styles.row}>
                        <Text style={styles.font}>{item.title}</Text>
                      </View>
                     
                      
                    </>
                  )}
                  
                />
                <View style={styles.footer}>
                <View style={styles.buttonContainer}>
                <Button onPress={()=> props.navigation.navigate("PostList")} title="See Post List" color={"black"}></Button>
                </View>
                <View style={styles.buttonContainer}>
                <Button onPress={()=> props.navigation.navigate("AlbumList")} title="See Album List" color={"black"}></Button>
                </View>
                </View>
                </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FAF597",
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    
  },
  listContainer: {
    display:"flex",
    marginTop:30,
    height:600,
    width:415,
    
    
  },
  font:{
  fontWeight:'bold',
  margin:5,
  borderWidth:3,
  

  },
 buttonContainer:{
  justifyContent:"center",
   alignItems:"center",
   backgroundColor:"#2B84F0",
   width:200,
  marginLeft:5,
  borderRadius:10,
  
 },
 footer:{
  flex:1,
  flexDirection:"row",
  justifyContent:"flex-start",
  alignItems:'center',
  
 }
  
});
