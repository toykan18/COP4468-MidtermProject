import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight,SafeAreaView} from 'react-native';




export function UserDetail(props) {
  

    const apiURL = `https://jsonplaceholder.typicode.com/users/${props.route.params.userid}`;

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
      <Text>ID:{userData.id}</Text>
      <Text>Name:{userData.name}</Text>
      <Text>Username:{userData.username}</Text>
      <Text>Street:{userData.address?.street}</Text>
      <Text>Suite:{userData.address?.suite}</Text>
      <Text>City:{userData.address?.city}</Text>
      <Text>Zipcode:{userData.address?.zipcode}</Text>
      <Text>Lat:{userData.address?.geo.lat}</Text>
      <Text>Lng:{userData.address?.geo.lng}</Text>
      <Text>Phone:{userData.phone}</Text>
      <Text>Website:{userData.website}</Text>
      <Text>Company Name:{userData.company?.name}</Text>
      <Text>Catch Phrase:{userData.company?.catchPhrase}</Text>
      <Text>BS:{userData.company?.bs}</Text>
      

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
