// added export const ViewPropTypes = { style: null };
// to node_modules/react-native-web/dist/index.js to eliminate errors running on web
// https://github.com/jsdf/react-native-htmlview/issues/313

import { Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper"; // 1.1.4

const Done = () => (
  <TouchableOpacity style={{ marginHorizontal: 15 }}>
    <Text style={{ fontSize: 16, color: "white" }}> Sign in</Text>
  </TouchableOpacity>
);

const Onboard = () => (
  <Onboarding
    DoneButtonComponent={Done}
    //onSkip={() => navigation.replace("Login")}
    //onDone={() => navigation.navigate("Login")}

    pages={[
      {
        backgroundColor: "#999",
        image: <Image source={require("../../assets/images/triangle.png")} />,
        title: "Welcome",
        subtitle: "Beautiful, isn't it?",
      },
      {
        backgroundColor: "#fff",
        image: <Image source={require("../../assets/images/circle.png")} />,
        title: "Tutorial 1",
        subtitle: "Done with React Native Onboarding Swiper",
      },
      {
        backgroundColor: "#fe6e58",
        image: <Image source={require("../../assets/images/square.png")} />,
        title: "Tutorial 2",
        subtitle: "This is the subtitle that sumplements the title.",
      },
      {
        backgroundColor: "#999",
        image: <Image source={require("../../assets/images/triangle.png")} />,
        title: "Tutorial 3",
        subtitle: "Beautiful, isn't it?",
      },
    ]}
  />
);

export default Onboard;
