import React, {Component} from 'react';
import {View} from 'react-native';
import style from './public/static/styles/style';
import TransactionList from './src/components/TransactionList';
import {Provider} from 'react-redux';
import store from './src/store/ConfigureStore';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={[style.container]}>
          <TransactionList />
        </View>
      </Provider>
    );
  }
}

export default App;
