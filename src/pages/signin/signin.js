import React from "react";
import { View, ToastAndroid, ActivityIndicator } from "react-native";
import { SocialIcon, Text, Button } from "react-native-elements";
import { withOAuth } from "aws-amplify-react-native";
import Amplify, { Auth, Hub } from "aws-amplify";

const Signin = (props) => {
  const {
    oAuthUser,
    oAuthError,
    hostedUISignIn,
    facebookSignIn,
    googleSignIn,
    loading,
    signOut,
  } = props;

  React.useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          ToastAndroid.show("Login Successfully", ToastAndroid.SHORT);
          break;
        case "signOut":
          break;
        case "signIn_failure":
          ToastAndroid.show("Something went wrong. Please try again later.");
          break;
      }
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 40,
              marginBottom: 70,
            }}
          >
            Trade.co
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text>Sign in to continue</Text>
        </View>
        {!oAuthUser && (
          <SocialIcon
            style={{
              paddingHorizontal: 30,
            }}
            title="Sign In With Facebook"
            button
            type="facebook"
            onPress={facebookSignIn}
            disabled={loading}
          />
        )}
        {!oAuthUser && (
          <SocialIcon
            title="Sign In With Google"
            button
            type="google"
            onPress={googleSignIn}
            disabled={loading}
          />
        )}
        {oAuthUser && (
          <Button title="Sign Out" onPress={signOut} disabled={loading} />
        )}
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 20,
        }}
      >
        {loading && <ActivityIndicator size="large" color="red" />}
      </View>
    </View>
  );
};

export default withOAuth(Signin);
