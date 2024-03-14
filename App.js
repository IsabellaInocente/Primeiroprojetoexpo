import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <Image style={styles.container}
    source={{uri:'https://images-porsche.imgix.net/-/media/7222692576E74959AF596EB7D3CE4ABD_04700CD889AF42B883B40AF5D7337E29_model-overview-berlin-desktop?w=999&q=85&auto=format'}}
    />
    </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
