import {s} from "./Forecasts.style"
import {useRoute} from "@react-navigation/native";
import {Header} from "../../components/Header/Header";
import {ForecastListItem} from "../../components/ForecastListItem/ForecastListItem";
import {View} from "react-native";
import {DAYS, getWeatherInterpretation} from "../../utils/meteo-utils";

export const Forecasts = ({}) => {
  const {params} = useRoute();

  const forecastList = (
    <View style={{marginTop: 50}}>
      {params.time?.map((time, index) => {
        const weatherCode = params.weathercode[index];
        const interpretation = getWeatherInterpretation(weatherCode);
        const temperature = params.temperature_2m_max[index];
        const date = new Date(time)
        const formatedDate = date.toLocaleDateString("default", {day:"numeric", month: "numeric"})
        return (<ForecastListItem key={index} image={interpretation.image} date={formatedDate} day={DAYS[date.getDay()]} temperature={temperature.toFixed(0)}/>)
      })}
    </View>
  )
  return <>
    <Header city={params.city}/>
    {forecastList}
    </>
}
