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

class Gauge extends React.Component {
  componentDidMount() {
    this.gauge = new JustGage({
      id: "gauge",
      value: 50,
      min: 0,
      max: 100,
      title: "Hello"
    });
  }
  render() {
    return (<Paper style={style}><div id="gauge" ref={(input) => { this.gauge = input; }} /></Paper>);
  }
};

export default Gauge;