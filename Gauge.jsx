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
    this.gauge = new JustGage({
      id: this.id,
      value: this.props.value,
      min: 0,
      max: 100,
      title: this.props.title,
      titlePosition: "below"
    });
  }
  render() {
    return (<Paper style={style}><div id={this.id} ref={(input) => { this.gauge = input; }} /></Paper>);
  }
};

export default Gauge;