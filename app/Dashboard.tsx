import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Alert,
  Button,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Appcode from "./Mainscreen";
import Mainscreen from "./Mainscreen";

function Dashboard(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/assets/standard-bank.png")}
        style={styles.image}
      />
      <Text style={{ color: "#fff" }}>Version 3.52.1</Text>
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/assets/explore.png")}
          style={styles.icon}
        />
        <Image
          source={require("../assets/assets/help.png")}
          style={styles.icon}
        />
      </View>
      <Text style={styles.textScreen}> Hello again,</Text>
      <Text style={styles.textScreen2}> User</Text>
      <TouchableOpacity
        style={[styles.btn, { width: 300, height: 35, marginTop: 20 }]}
        onPress={() => {
          navigation.navigate("Mainscreen");
        }}
      >
        <Text style={styles.btnText}>SIGN IN</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        By signing in, I agree to the <Text style={styles.linkText}>T&C's</Text>
      </Text>
      <View style={styles.footer}>
        <Text style={styles.text2}>Existing user</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  image: {
    width: 100,
    height: 100,
  },
  iconContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 15,
    marginRight: 15,
  },
  textScreen: {
    color: "#fff",
    fontSize: 25,
  },
  textScreen2: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 60,
  },
  btn: {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnR: {
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnText: {
    color: "#000080",
    textAlign: "center",
    fontSize: 13,
    fontWeight: "800",
  },
  btnTextR: {
    color: "white",
    textAlign: "center",
    fontSize: 13,
  },
  buttonSpacer: {
    width: 20,
  },
  text: {
    color: "#fff",
    marginTop: 30,
    textAlign: "center",
  },
  text2: {
    color: "#fff",
  },
  linkText: {
    color: "#fff",
    textDecorationLine: "underline",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 180,
  },
});

export default Dashboard;
