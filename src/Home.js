import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight} from 'react-native';




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
    <View style={styles.container}>
       <FlatList
                  data={userData
                    }
                  renderItem={({ item }) => (
                    <>
                    <TouchableHighlight onPress={()=> props.navigation.navigate("UserDetail", {userid:item.id})}>
                      <View style={styles.row}>
                        <Text>{item.name}</Text>
                      </View>
                      </TouchableHighlight>
                    </>
                  )}
                />
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