import AuthContent from '../components/Auth/AuthContent';
import {createUser, login} from "../util/auth";
import {useContext, useState} from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {Alert} from "react-native";
import {AuthContext} from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState();
  const authCtx = useContext(AuthContext);

  const signupHandler = async ({email, password}) => {
    setIsAuthenticating(true)
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (e) {
      Alert.alert('Authentication failed!', 'Could not create your user.');
    }
    setIsAuthenticating(false)
  }

  if(isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;
