import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

//added my photo, name, and bio to the profile screen, and styled it with a simple layout.
export default function App() {
  return (
    <View style={s.screen}>

      <Image 
        source={require('../../assets/images/Dianne PHOTO.jpg')}
        style={s.photo}
      />
      
      <Text style={s.name}>Dianne Melody E. Talictic</Text>
      
      <Text style={s.bio}>MMA student • CS126</Text>
    </View>
  );
}

//changed the stylesheet to match the new design of the profile screen, with a white background, centered content, and a circular photo. 
//Edited on May 17, 2026
const s = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#ffffff' 
  },
  photo: { 
    width: 120, 
    height: 120, 
    borderRadius: 60 
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginTop: 12 
  },
  bio: { 
    fontSize: 14, 
    color: '#888' 
  }
});