import React from 'react';
import Paper from 'material-ui/Paper';
import 'justgage/justgage';
import 'justgage/raphael-2.1.4.min';

const style = {
  height: 200,
  width: 250,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

let lastId = 0;

class Gauge extends React.Component {
  componentWillMount() {
    lastId++;
    this.id = `gauge${lastId}`;  
  }
  componentDidMount() {
    var justgageParms = {
      id: this.id,
      value: this.props.value,
      decimals: this.props.decimals,
      min: this.props.min,
      max: this.props.max,
      hideMinMax: this.props.hideMinMax,
      title: this.props.title,
      titlePosition: "below",
      noGradient: true
    }
    if (this.props.customSectors) {
      justgageParms.customSectors = this.props.customSectors
    }
    this.gauge = new JustGage(justgageParms);
  }
  render() {
    return (<Paper style={style}><div style={{marginTop:20}} id={this.id} ref={(input) => { this.gauge = input; }} /></Paper>);
  }
};

export default Gauge;