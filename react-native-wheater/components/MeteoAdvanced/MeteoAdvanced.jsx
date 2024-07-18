import {s, StyledContainer, StyledLabel, StyledValue} from './MeteoAdvanced.style';
import {View} from "react-native";
export const MeteoAdvanced = ({sunrise, sunset, windspeed}) => {
  return (
    <View style={s.container}>
      <StyledContainer>
        <StyledValue>{sunrise}</StyledValue>
        <StyledLabel>Sunrise</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{sunset}</StyledValue>
        <StyledLabel>Sunset</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{windspeed}</StyledValue>
        <StyledLabel>WindSpeed</StyledLabel>
      </StyledContainer>
    </View>
  );
}
