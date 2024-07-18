import {Image, Text} from "react-native";
import {s} from './Header.style';

const logo = require('../../assets/images/logo.png');

export const Header = () => {
  return <>
    <Image style={s.img} source={logo} resizeMode="contain"/>
    <Text style={s.subtitle}>You probably have something to do</Text>
  </>
}
