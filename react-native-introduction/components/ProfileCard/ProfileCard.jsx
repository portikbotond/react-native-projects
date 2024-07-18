import {View, Text, Image, TouchableOpacity} from "react-native";
import {profileCardStyle} from'./ProfileCard.style';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export function ProfileCard({firstName, lastName, age, onPressSocialMediaIcon}) {
  return <View style={profileCardStyle.container}>
    <View style={profileCardStyle.header}>
      <View>
        <Image style={profileCardStyle.avatar} source={{uri: "https://i.pravatar.cc/300"}} />
      </View>
      <View style={profileCardStyle.texts}>
        <Text style={profileCardStyle.name}>{firstName} {lastName}</Text>
        <Text>Hi! I am a react native developer, Iam {age} years old.</Text>
      </View>
    </View>
    <View style={profileCardStyle.social}>
      <TouchableOpacity onPress={() => onPressSocialMediaIcon("twitter")} style={profileCardStyle.socialButton}>
        <FontAwesome name="twitter" size={24} color="#1DA1f2" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPressSocialMediaIcon("linkedin")} style={profileCardStyle.socialButton}>
        <FontAwesome name="linkedin" size={24} color="#0A66C2" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPressSocialMediaIcon("github")} style={profileCardStyle.socialButton} >
        <FontAwesome name="github" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  </View>
}
