import {s} from './MeteoBasic.style';
import {Image, TouchableOpacity, View} from "react-native";
import {Txt} from "../Txt/Txt";
import {Clock} from "../Clock/Clock";
import {useNavigation} from "@react-navigation/native";
export const MeteoBasic = ({temperature, interpratation, city, dailyWeather}) => {
  const nav = useNavigation();

  return (<>
    <View style={s.clock}>
      <Clock />
    </View>
    <View style={s.city}>
      <Txt>{city}</Txt>
    </View>
    <View style={s.interpretation}>
      <Txt style={s.interpretation_text}>{interpratation.label}</Txt>
    </View>
    <View style={s.temperature_box}>
      <TouchableOpacity onPress={() => nav.navigate("Forecasts", {city, ...dailyWeather})}><Txt style={s.temperature}>{temperature}°</Txt></TouchableOpacity>
      <Image source={interpratation.image} style={s.image} />
    </View>
  </>);
}
