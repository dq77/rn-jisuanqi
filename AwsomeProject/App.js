import React, { Component } from "react";

import { AppRegistry, Image, TouchableHighlight, StyleSheet, Text, View, Alert } from "react-native";

class NumPad extends Component {
  render() {
    let number = this.props.num
    return (
      <View style={styles.nea}>
        <TouchableHighlight underlayColor='#E0E1E2' onPress={this.props.fn} style={styles.tea}>
          <Text style={styles.txt}>{number}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default class SampleAppMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: '',
      num2: '',
      fun: '',
      equal: '',
      v: false
    };
    this.clear = this.clear.bind(this);
    this.numFn = this.numFn.bind(this);
    this.calcu = this.calcu.bind(this);
    this.equFn = this.equFn.bind(this);
    this.suan = this.suan.bind(this);
    this.back = this.back.bind(this);
  }

  componentDidMount() {
  }
  clear() {
    this.setState({
      num: '',
      num2: '',
      fun: '',
      equal: '',
      v: false
    })
  }
  numFn(num){
    let iptNum = num
    let oldNum
    if (this.state.v) {
      oldNum = this.state.num2;
    } else {
      oldNum = this.state.num;
    }
    if ((oldNum == '0' && iptNum == '0') || (oldNum.includes('.') && iptNum == '.')) {
      return false
    }
    let newNum = oldNum + iptNum;
    if (this.state.v) {
      this.setState({
        num2: newNum
      });
    } else {
      this.setState({
        num: newNum
      });
    }

  }
  calcu(e) {
    let fun = e;
    let num = this.state.num;
    if (this.state.num && this.state.num2 && (this.state.v) ) {
      num = this.suan(this.state.num-0, this.state.num2-0, this.state.fun)
    }
    let v = true
    this.setState({
      fun: fun,
      num: num,
      num2: '',
      v: v
    });
  }
  equFn(e) {
    let num = this.state.num - 0;
    let num2 = this.state.num2 - 0;
    let fun = this.state.fun;
    let equ = this.state.equal || 0;
    equ = this.suan(num, num2, fun)
    this.setState({
      num: equ,
      v: false
    });
  }
  suan(num, num2, fun) {
    let equ = 0;
    if (fun == '+') {
      equ = num + num2;
    } else if (fun == '-') {
      equ = num - num2;
    } else if (fun == '*') {
      equ = num * num2;
    } else if (fun == '/') {
      equ = num / num2;
    }
    return equ
  }
  back(e){
    let numbr
    if( this.state.v ){
      numbr = 'num2'
    } else{
      numbr = 'num'
    }
    let thisnum = this.state[numbr] + ''
    if (thisnum) {
      thisnum = thisnum.slice(0, thisnum.length - 1)
    }
    if (this.state.v) {
      this.setState({
        num2: thisnum
      });
    } else {
      this.setState({
        num: thisnum
      });
    }
  }
  render() {
    let num2HTML = this.state.num2 && this.state.v ? <View><Text style={styles.area}>{this.state.num2}</Text></View> : null;
    let numHTML = (this.state.num !=='' && (!this.state.v)) || (this.state.num !=='' && this.state.v && (!this.state.num2)) ? <View><Text style={styles.area}>{this.state.num}</Text></View> : null;
    let equalHTML = <View><Text style={styles.area}>{this.state.equal}</Text></View>
    return (
      <View style={styles.page}>
        <View style={styles.numTop}>
          {num2HTML}
          {numHTML}
          {equalHTML}
        </View>
        <View style={styles.numTab}>
          <NumPad num="AC" fn={this.clear}></NumPad>
          <NumPad num="←" fn={this.back}></NumPad>
          <NumPad num="%" fn={this.clear}></NumPad>
          <NumPad num="/" fn={() => this.calcu('/')}></NumPad>
          <NumPad num="7" fn={() => this.numFn(7)}></NumPad>
          <NumPad num="8" fn={() => this.numFn(8)}></NumPad>
          <NumPad num="9" fn={() => this.numFn(9)}></NumPad>
          <NumPad num="*" fn={() => this.calcu('*')}></NumPad>
          <NumPad num="4" fn={() => this.numFn(4)}></NumPad>
          <NumPad num="5" fn={() => this.numFn(5)}></NumPad>
          <NumPad num="6" fn={() => this.numFn(6)}></NumPad>
          <NumPad num="-" fn={() => this.calcu('-')}></NumPad>
          <NumPad num="1" fn={() => this.numFn(1)}></NumPad>
          <NumPad num="2" fn={() => this.numFn(2)}></NumPad>
          <NumPad num="3" fn={() => this.numFn(3)}></NumPad>
          <NumPad num="+" fn={() => this.calcu('+')}></NumPad>
          <NumPad num="" fn={this.clear}></NumPad>
          <NumPad num="0" fn={() => this.numFn(0)}></NumPad>
          <NumPad num="." fn={() => this.numFn('.')}></NumPad>
          <View style={styles.nea}>
            <TouchableHighlight underlayColor='#E0E1E2' onPress={this.equFn} style={styles.teaequal}>
              <Text style={styles.txtequal}>=</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  page: {
    backgroundColor: '#F0F0F0',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  numTop: {
    flexGrow: 1,
    height: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  area: {
    fontSize: 40,
    paddingRight: 24,
    textAlign: 'right',
    color: '#181818'
  },
  numTab: {
    backgroundColor: '#FFF',
    flexGrow: 2,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'stretch'
  },
  nea: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column'
  },
  tea: {
    flexGrow: 1,
    borderRightColor: '#C3C5C6',
    borderRightWidth: 1,
    borderTopColor: '#C3C5C6',
    borderTopWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  teaequal: {
    flexGrow: 1,
    borderRightColor: '#C3C5C6',
    borderRightWidth: 1,
    borderTopColor: '#C3C5C6',
    borderTopWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FB7730',
  },
  txt: {
    color: '#4F5157',
    fontSize: 30
  },
  txtequal: {
    color: '#FFF',
    fontSize: 30
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  }
});
// AppRegistry.registerComponent('SampleAppMovies', () => App)