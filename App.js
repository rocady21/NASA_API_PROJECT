import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/views/Home/Home';
import AppRoutes from './src/routes/AppRoutes';

export default function App() {
  return (
    <View style={styles.container}>
      <AppRoutes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"rgba(7,26,93,255)",
    flex: 1,
    paddingTop:20

  },
});
