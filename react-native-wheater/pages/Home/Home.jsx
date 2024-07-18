import {s} from './Home.style';
import {View} from "react-native";
import {MeteoBasic} from "../../components/MeteoBasic/MeteoBasic";
import {getWeatherInterpretation} from "../../utils/meteo-utils";
import {MeteoAdvanced} from "../../components/MeteoAdvanced/MeteoAdvanced";
import {SearchBar} from "../../components/SearchBar/SearchBar";

export const Home = ({weather, city, onSubmitSearch}) => {
  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherInterpretation(currentWeather.weathercode)
  return (<>
    <View style={s.meteo_basic}>
      <MeteoBasic
        temperature={Math.round(currentWeather.temperature)}
        interpratation ={currentInterpretation}
        city={city}
        dailyWeather={weather.daily}
      />
    </View>
    <View style={s.searchbar_container}>
      <SearchBar onSubmit={onSubmitSearch} />
    </View>
    <View style={s.meteo_advanced}>
      <MeteoAdvanced
      sunrise={weather.daily.sunrise[0].split('T')[1]}
      sunset={weather.daily.sunset[0].split('T')[1]}
      windspeed={currentWeather.windspeed}
      />
    </View>
  </>);
}
