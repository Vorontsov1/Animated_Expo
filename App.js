import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ColorSwitch from "./src/screens/ColorSwitch";
import MultiPlayer from "./src/screens/MultiPlayer/MultiPlayer";




const  App = () => {
  return (
    <View style={styles.container}>
      <ColorSwitch />
      {/* <MultiPlayer /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
