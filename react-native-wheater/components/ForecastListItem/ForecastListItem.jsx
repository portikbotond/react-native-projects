import {Image, View} from "react-native";
import {Txt} from "../Txt/Txt";
import {s} from './ForecastListItem.style'

export const ForecastListItem = ({image, day, date, temperature}) => {
  return<View style={s.container}>
    <Image style={s.image} source={image}></Image>
    <Txt style={s.day}>{day}</Txt>
    <Txt style={s.date}>{date}</Txt>
    <Txt style={s.temperature}>{temperature}°</Txt>
  </View>
}
