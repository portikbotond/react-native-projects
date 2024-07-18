import { View} from "react-native";
import {s} from './Clock.style';
import {Txt} from "../Txt/Txt";
import {nowToHHMM} from "../../utils/date-time";
import {useEffect, useState} from "react";

export const Clock = () => {
  const [time, setTime] = useState(nowToHHMM());
  useEffect(() => {
    const intId = setInterval(() => {
      setTime(nowToHHMM())
    }, 1000)
    return () => {
      clearInterval(intId);
    }
  }, []);
  return<View><Txt style={s.time}>{time}</Txt></View>
}
