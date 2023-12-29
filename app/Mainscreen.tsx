import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageStyle,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Homescreen from './Homescreen';
import Manage from './Manage';

function Mainscreen(): React.JSX.Element {
  const navigation = useNavigation();
  const handleManage = () => {
    navigation.navigate("Manage")
  };
  const handleHome = () => {
    navigation.navigate("Homescreen")
  };
  useEffect(() => {
    handleHome();
  
  }, []);


  return (
    <View style={styles.container}>
      <Homescreen/>
      <View style={styles.footer}>
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => {
              handleHome();
            }}>
            <Image
              source={require('../assets/assets/home.png')}
              style={[styles.iconFooter, { tintColor: '#0033cc' } as ImageStyle]}
            />
            <Text style={[styles.textfooter, { color: '#0033cc' }]}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => {
              handleManage();
            }}>
            <Image
              source={require('../assets/assets/Manage.png')}
              style={[styles.iconFooter,{marginLeft: 5} as ImageStyle]}
            />
            <Text style={styles.textfooter}>Manage</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.imageFooter as ImageStyle}
            source={require('../assets/assets/transact.png')}
          />
          <Text style={styles.textfooter}>Transact</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.iconFooter2 as ImageStyle}
            source={require('../assets/assets/cart.png')}
          />
          <Text style={styles.textfooter}>Buy</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.iconFooter3 as ImageStyle}
            source={require('../assets/assets/More.png')}
          />
          <Text style={styles.textfooter}>More</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  item: {},
  text: {
    fontSize: 15,
    color: '#fff',
  },
  textfooter: {
    fontSize: 15,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    // Additional footer styles
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },

  button: {
    width: 300,
    height: 150,
    margin: 30,
  },
  icon1: {
    width: 35,
    height: 35,
    marginLeft: 10,
    marginBottom: 3,
  },
  iconhelp: {
    width: 45,
    height: 45,
  },
  icon: {
    width: 40,
    height: 40,
  },
  iconFooter: {
    width: 30,
    height: 30,
    marginTop: -20,   
  },
  iconFooter2: {
    width: 40,
    height: 35,
    marginTop: -20,
  },
  iconFooter3: {
    width: 40,
    height: 35,
    marginTop: -20,
  },
  icon3: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  imageFooter: {
    width: 60,
    height: 60,
    marginTop: '-70%',
    marginBottom: 8,
  },
});
export default Mainscreen;
