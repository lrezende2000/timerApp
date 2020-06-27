import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity } from 'react-native';


export default class App extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      selected: false,
      timeOut: null,
      counter: 0
    }
  
    console.disableYellowBox = true;

  }

  selected = () => {
    var interval = setInterval(() => {
      this.setState({counter: this.state.counter - 1})

      if(this.state.counter == 0){
        clearInterval(interval);
        this.setState({
          selected: false,
          timeOut: null,
          counter: 0
        });
        alert('The timer has ended!')
      }
    }, 1000);
  }

  displayTimer = () => {
    var counters = [];
    for(var i = 1; i <= 60; i++){
      counters.push(<Picker.Item label={i.toString()} value={i.toString()} />);
    }
  
    if(this.state.selected == false){
      return (
        <View style={styles.boxTimerSelect}>
          <Text style={{ textAlign: 'center', fontSize: 19, color: '#fff', marginTop: 50 }}>Selecione o tempo para o timer:</Text>
          <Picker style={{width: 200, height: 30}} onValueChange={(value, index) => this.setState({selected: true, counter: value})}>
            <Picker.Item label="Selecione o tempo..." value="Selecione o tempo..." />
            {counters}
          </Picker>
        </View>
      )
    }
  
    else {
  
      return (
        <View style={styles.boxTimerSelect}>
          <Text style={{ textAlign: 'center', fontSize: 19, color: '#fff', marginTop: 50 }}>Contagem: {"\n\n"} {this.state.counter}</Text>
          <TouchableOpacity style={styles.btn} onPress={() => this.selected()}><Text>Começar</Text></TouchableOpacity>
        </View>
      )
    }
  }

  render(){
    return (
      <View>{this.displayTimer()}</View>
    )
  }
}



const styles = StyleSheet.create({
  
  boxTimerSelect: {
    display: 'flex',
    backgroundColor: '#934CFF',
    height: '100%',
    alignItems: 'center'
  },

  btn: {
    backgroundColor: '#5F32A8', 
    padding: 10,
    borderRadius: 20,
    marginTop: 10
  }

});
