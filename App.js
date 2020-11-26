
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      button: 0
    }
  }

  componentDidMount(){
    let that = this
    console.log(this.state.button)
    this.setState({button: 100})
    setTimeout(() => {this.button.setNativeProps({opacity: 100})}, 1600)
  }


  render(){
  return (
    <NavigationContainer>
    <>
      <View style={styles.login}>
        <Text h2 style={styles.welcome}>
          Welcome to
        </Text>
        <Text h1 style={styles.taskits}>
          Taskits
        </Text>
        <AnimatedCircularProgress
          size={250}
          width={10}
          fill={100}
          duration={1500}
          rotation={360}
          tintColor="#00e0ff"
          backgroundColor="rgb(3,3,3)" />
          <TouchableOpacity
            ref={ele => this.button = ele}
            style={styles.loginButton}
          >
            <Text>Login</Text>
          </TouchableOpacity>
      </View>
    </>
    </NavigationContainer>
  );
};
}

const styles = StyleSheet.create({
  login: {
    backgroundColor: `rgb(227, 241, 250)`,
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    // textAlign: 'center',
    fontSize: 20,
    marginTop: 150
  },
  taskits: {
    // textAlign: 'center',
    fontSize: 50,
    marginTop: 10,
    marginBottom: 100
  },
  circle: {
    marginTop: 25
  },
  loginButton: {
    backgroundColor: '#00e0ff',
    opacity: 0,
    marginTop: 70,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default App;
