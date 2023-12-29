import React from 'react';
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

function Homescreen(): React.JSX.Element {
  return (
    <LinearGradient
      colors={['#1f1293', '#2520ab', '#282dc3', '#293bdd', '#2749f7']}
      style={styles.container}>
      <View style={styles.header}>
        <View style={styles.item}>
          <Image
            style={styles.icon1 as ImageStyle}
            source={require('../assets/assets/Addon.png')}
          />
          <Text style={styles.text}>Add ons</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../assets/assets/explore.png')}
            style={styles.icon as ImageStyle}
          />
          <Text style={styles.text}>Explore</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../assets/assets/standard-bank.png')}
            style={styles.image as ImageStyle}
          />
        </View>
        <View style={styles.item}>
          <Image
            source={require('../assets/assets/help.png')}
            style={styles.iconhelp as ImageStyle}
          />
          <Text style={(styles.text, {marginLeft: 8, color: '#fff'})}>
            Help
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../assets/assets/Message.png')}
            style={styles.icon3 as ImageStyle}
          />
          <Text style={styles.text}>Messages</Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            paddingLeft: 10,
            paddingTop: 10,
          }}>
          Accounts
        </Text>
        <TouchableOpacity onPress={() => Alert.alert('Accounts Not Linked')}>
          <Image
            style={styles.button as ImageStyle}
            source={require('../assets/assets/linkaccount.png')}
          />
          {/*<Text style={{ color: "#fff", fontSize: 15, marginTop: 15 }}>
            Link your Accounts
          </Text> */}
          {/* <View
            style={{
              position: "absolute",
              backgroundColor: "blue",
              width: "30%",
              borderTopWidth: 1,
              borderRightWidth: 1,
              borderColor: "#fff",
              zIndex: -1,
              transform: [{ skewY: "45deg" }],
              top: -4,
              right: 0,
              overflow: "hidden",
            }}
          /> */}
        </TouchableOpacity>
      </View>
      <StatusBar />
    </LinearGradient>
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
    marginTop: -360,
  },
  item: {},
  text: {
    fontSize: 15,
    color: '#fff',
  },
  textfooter: {
    fontSize: 15,
    color: 'rgb(156 145 145)',
  },

  button: {
    width: 320,
    height: 160,
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

  icon3: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
});

export default Homescreen;
