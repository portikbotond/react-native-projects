import { StyleSheet, Text, View } from 'react-native';
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../store/auth-context";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState('')
  const authCtx = useContext(AuthContext);
  const token = authCtx.token
  useEffect(() => {
    axios.get(`https://authentication-cours-default-rtdb.firebaseio.com/message.json?auth=${token}`).then((res) => {
      setFetchedMessage(res.data);
    })
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
