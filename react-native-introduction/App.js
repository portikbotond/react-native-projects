import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {ProfileCard} from "./components/ProfileCard/ProfileCard";
import {Linking} from "react-native";
export default function App() {
  function goToSocialMedia(socialMedia) {
    let url = '';
    switch (socialMedia){
      case 'twitter':
        url = "https://icons.expo.fyi/Index/FontAwesome/twitter"
        break;
      case 'linkedin':
        url = "https://icons.expo.fyi/Index/FontAwesome/linkedin"
        break;
      case 'github':
        url = "https://icons.expo.fyi/Index/FontAwesome/github"
        break;
    }
    Linking.openURL("https://icons.expo.fyi/Index/FontAwesome/github");

  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, justifyContent: "center", padding: 20}}>
        <ProfileCard firstName={"Codiku"} lastName={"theDev"} age={30} isOpenToWork={true} onPressSocialMediaIcon={goToSocialMedia}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


