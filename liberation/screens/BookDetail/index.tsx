import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { LoggedInStackParamList } from '../../navigation/LoggedInNavigator';

type Prop = StackNavigationProp<LoggedInStackParamList, 'BookDetailScreen'>;
type Props = { navigation: Prop; route: RouteProp<LoggedInStackParamList, 'BookDetailScreen'>; };

const BookDetailScreen = ({ navigation, route}: Props) => {

  const { book } = route.params;

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    console.log(book);
  }, []);
  
  return (

    <>
      <StatusBar></StatusBar>
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={goBack}>
                <FontAwesomeIcon icon={faArrowLeft} color="#293462" size={20}></FontAwesomeIcon>
              </TouchableOpacity>
              <Text style={styles.headerText}>{book.id}</Text>
            </View>
            <View style={styles.bookItemContainer}>
              <Text style={styles.bookItemText}>{book.title}</Text>
            </View>
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


export default BookDetailScreen;
