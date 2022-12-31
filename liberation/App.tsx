import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  
  
  const [books, setBooks] = useState([{title:'', id:''}]);

  useEffect(() => {
    console.log('useEffect')
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setBooks(json.slice(0, 20)))
  }, []);

  return (
    <>
      <StatusBar></StatusBar>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>My Library</Text>
          </View>
          <ScrollView>
            {books.map((book) => (
              <TouchableOpacity style={styles.bookItemContainer} key={book.id}>
                <Image source={{uri: "https://placehold.co/600x400/png"}} style={styles.bookImage}></Image>
                <Text style={styles.bookItemText}>{book.title.substring(0, 30)}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>

  );
}


const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Raleway-Regular",
    color: '#293462'
 },
  bookItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#293462',
 },
 bookItemText: {
    fontFamily: "Raleway-Regular",
    fontSize: 16,
    color: '#293462',
    marginLeft: 10,
 },
 bookImage: {
  width: 77,
  height: 77,
  borderRadius: 7
},
});


export default App;
