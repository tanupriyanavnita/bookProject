import { React, {Component}}from 'react';
import { Image,View,StyleSheet} from 'react-native';

var logo = require('./booksmen-logo.png');
export default class Splash extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 5000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={{height: 150, width: 150}} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});