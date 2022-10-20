import { Platform, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const WEBSITE = 'http://192.168.0.108:5173/'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%' }}>
        <WebView
          source={{ uri: WEBSITE }}
          onLoad={() => console.log('loaded')}
        />
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 35 : 50 ,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});