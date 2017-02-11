import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Gauge extends React.Component {
  render() {
    return (<Paper style={style} />);
  }
};


export default Gauge;