import React from 'react';
import ReactDOM from 'react-dom';
import Gauge from './Gauge';

class DecisionExplanation extends React.Component {
	constructor() {
		super();
		this.state = { gauges: [] };
	}
	componentDidMount() {
       fetch('http://localhost:24818/api/Gauges/f83c7219-677b-4544-aec4-7077680b9493') 
        .then(this.checkStatus)
		.then(result=>result.json())
		.then(json=>this.setState(json));
	}
	render() {
		return (<div>
				   {this.state.gauges.map(item=><Gauge key={item.id} title={item.title} value={item.value} min={item.min} max={item.max} decimals={item.showNoOfDecimals} hideMinMax={!item.showMinMaxValues} customSectors={item.customSectors}/>)}
    			</div>);
	}
	checkStatus(response) {
  		if (response.status >= 200 && response.status < 300) {
    		return response;
  		} else {
    		console.log(response.statusText);
  		}
	}
}

export default DecisionExplanation;