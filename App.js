import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import Row from './components/Row';
import { useCallback, useEffect, useState } from 'react';
import Add from './components/Add';
import uuid from 'react-native-uuid'; // Import react-native-uuid
import Appbar from './components/AppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';


const STORAGE_KEY = "@items_key"
export default function App() {
  const[data, setData] = useState([])
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    storeData(data)
  }, [data])

  useEffect(() => {
    getData()
  }, [])
  
 
  const add = useCallback((name) => {
    const newItem = {
      id: uuid.v4(),
      name:name
    }
    const tempData = [...data, newItem]
    setData(tempData)
  },[data])
  

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY)
      const json = JSON.parse(value)
      if (json === null) {
        json = []
      } setData(json)
      console.log(json);
      
    } catch (err) {
      console.log(err)
    }
  }

  const storeData = async (value) => {
    try {
      const json = JSON.stringify(value)
      await AsyncStorage.setItem(STORAGE_KEY, json)
      console.log(json);
    } catch (err) {
      console.log(err)
    }
  }


  return (
   <SafeAreaProvider>
    <SafeAreaView >
    <Appbar style={styles.appbar} />
      <FlatList
      data = {data}
      keyExtractor = {item => item.id}
      extraData={selectedId}
      renderItem={({item} )=> (
      <Row item ={item}
      selectedId={selectedId}
      select={setSelectedId}
      />
    )}
    
  />
  <Add add={add}/>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    marginBottom:10
  },
  
});
