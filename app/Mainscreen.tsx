import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageStyle,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-ionicons";
import LinearGradient from "react-native-linear-gradient";
function Mainscreen(): React.JSX.Element {
  return (
    <LinearGradient
      colors={["#1f1293", "#2520ab", "#282dc3", "#293bdd", "#2749f7"]}
      style={styles.container}
    >
      <View />
      <View style={styles.header}>
        <View style={styles.item}>
          <Image
            style={styles.icon1 as ImageStyle}
            source={require("../assets/assets/Addon.png")}
          />
          <Text style={styles.text}>Add ons</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require("../assets/assets/explore.png")}
            style={styles.icon as ImageStyle}
          />
          <Text style={styles.text}>Explore</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require("../assets/assets/standard-bank.png")}
            style={styles.image as ImageStyle}
          />
        </View>
        <View style={styles.item}>
          <Image
            source={require("../assets/assets/help.png")}
            style={styles.iconhelp as ImageStyle}
          />
          <Text style={(styles.text, { marginLeft: 8, color: "#fff" })}>
            Help
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require("../assets/assets/Message.png")}
            style={styles.icon3 as ImageStyle}
          />
          <Text style={styles.text}>Messages</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text
          style={{
            fontSize: 20,
            color: "#fff",
            paddingLeft: 10,
            paddingTop: 10,
          }}
        >
          Accounts
        </Text>
        <TouchableOpacity onPress={() => Alert.alert("Accounts Not Linked")}>
          <Image
            style={styles.button as ImageStyle}
            source={require("../assets/assets/linkaccount.png")}
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
      <View style={styles.footer}>
        <View style={styles.item}>
          <Image
            source={require("../assets/assets/home.png")}
            style={styles.iconFooter as ImageStyle}
          />
          <Text style={styles.textfooter}>Home</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require("../assets/assets/Manage.png")}
            style={styles.iconFooter as ImageStyle}
          />
          <Text style={styles.textfooter}>Manage</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.imageFooter as ImageStyle}
            source={require("../assets/assets/transact.png")}
          />
          <Text style={styles.textfooter}>Transact</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.iconFooter2 as ImageStyle}
            source={require("../assets/assets/cart.png")}
          />
          <Text style={styles.textfooter}>Buy</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.iconFooter3 as ImageStyle}
            source={require("../assets/assets/More.png")}
          />
          <Icon name="home-outline" />
          <Icon ios="ios-add" android="md-albums" size={40} color="orange" />
          <Text style={styles.textfooter}>More</Text>
        </View>
      </View>
      <StatusBar />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  body: {
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
  },
  item: {},
  text: {
    fontSize: 15,
    color: "#fff",
  },
  textfooter: {
    fontSize: 15,
    color: "rgb(156 145 145)",
  },
  footer: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
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
    marginTop: "-70%",
    marginBottom: 8,
  },
});
export default Mainscreen;
