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

function Welcome(): React.JSX.Element {
  const handleRegister = () => {};
  const handleTerms = () => {
    Alert.alert("please accept terms ");
  };
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
      <Text style={styles.textScreen}> Welcome</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.btn, { width: 150, height: 35 }]}
          onPress={() => {
            Linking.openURL(
              "https://enterprisests.standardbank.co.za/as/authorization.oauth2?client_id=df079f93-91dd-4266-b5c5-86dc0fab13bd&code_challenge=CHD19IKuok3-uMj02JM-vMiDd39Q1jZXdaR4NY4sMEI&code_challenge_method=S256&redirect_uri=https%3A%2F%2Faccountopening.standardbank.co.za%2Fstore%2Fservices%2Fauthcallback%2FAOB_Ping&response_type=code&scope=openid+profile+email+securitycontextstore.*.*+securityidvorchestration.*.*&state=CAAAAYxoejbZMDAwMDAwMDAwMDAwMDAwAAAA9pmzOnIBTDuFeEf-8JaD8kJsiOO16-7NNKKaV3qioKNhgIrTBSeIv2NV9m3aSB4veyGqFKM8kqKhw5pJaCxaDfbGBuF7ML9488RxZFriaSr4XBtt_znJ3tdAVyGXucdrvFGhzw7Db-HlnY4GTTkjb6ATQ7dx8ZucNxC28DRP7mDADU_6eaqwYHsr7G_3jmuPHj1OrBBwF6LR46BefwFRltXFkZXxC2Pp1F16axSZrcK3AaLdtc_1U2zryEsNynlGGmOUaflDVosmCHY3rbQZjBp8FRiRaBgmqZgMuxfkN5zTE_JwV2n3pr5QxKKah-9dVru6aGflNLnRd2Rj0xsfJLU%3D"
            );
          }}
        >
          <Text style={styles.btnText}>SIGN IN</Text>
        </TouchableOpacity>
        <View style={styles.buttonSpacer} />
        <TouchableOpacity
          style={[styles.btnR, { width: 150, height: 35 }]}
          onPress={() => {
            Linking.openURL(
              "https://enterprisests.standardbank.co.za/as/BEfZAnm9p4/resume/as/authorization.ping"
            );
          }}
        >
          <Text style={styles.btnTextR}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        By signing in or registering, I agree to the{" "}
        <Text style={styles.linkText} onPress={handleTerms}>
          T&C's
        </Text>
      </Text>
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
    fontSize: 32,
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
    fontWeight: "800",
  },
  buttonSpacer: {
    width: 20,
  },
  text: {
    color: "#fff",
    marginTop: 30,
    textAlign: "center",
  },
  linkText: {
    color: "#fff",
    textDecorationLine: "underline",
  },
});

export default Welcome;
