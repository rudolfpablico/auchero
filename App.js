import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import Amplify, { Auth, Hub } from "aws-amplify";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Signin from "pages/signin/signin";
import Onboard from "pages/onboard/onboard";
// import awsconfig from "./src/aws-exports";

//Amplify.configure(awsconfig);

const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Onboard />
      {/* <Text>Hello</Text> */}
      {/* <Signin /> */}
    </View>
  );
};

export default App;
