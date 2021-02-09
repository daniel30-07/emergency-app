import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'

export default class App extends Component {
  // contructor(props) {
  //   super(props)
  //   this.state = {

  //   }
  // }
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.text}> Test </Text>
        </View>
      </>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'

  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

