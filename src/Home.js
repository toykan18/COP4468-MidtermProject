import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight,SafeAreaView,Button} from 'react-native';





export function Home(props) {
  

    const apiURL = 'https://jsonplaceholder.typicode.com/users';

    const [userData, setuserData] = useState([]);

    

    
    useEffect(() => {

        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => {

                setuserData(data);
                

            })

    }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
       <FlatList
                  data={userData
                    }
                  renderItem={({ item }) => (
                    <>
                    <TouchableHighlight onPress={()=> props.navigation.navigate("UserDetail", {userid:item.id})}>
                      <View style={styles.row}>
                        <Text style={styles.font}>{item.name}</Text>
                      </View>
                      </TouchableHighlight>
                      
                    </>
                  )}
                  
                />
                <View style={styles.buttonContainer}>
                <Button onPress={()=> props.navigation.navigate("PostList")} title="See Post List" color={"black"}></Button>
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
   height:70,
   width:200,
  marginLeft:100,
  borderRadius:10,
 }
  
});
