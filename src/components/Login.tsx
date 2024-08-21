import { useAuth } from "@realm/react";
import { Text, TouchableOpacity, View } from "react-native";

const Login = () => {
  const { logInWithAnonymous } = useAuth();

  const guestLogin = () => {
    logInWithAnonymous;
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={guestLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
