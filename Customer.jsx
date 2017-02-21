import React from 'react';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class Customer extends React.Component {
  constructor() {
    super();
    this.state = { purchaseApprovals: [] };
  }
  componentDidMount() {
    fetch(`http://localhost:24818/api/PurchaseApproval/${this.props.params.invId}`) 
    .then(this.checkStatus)
    .then(result=>result.json())
    .then(json=>this.setState( { purchaseApprovals: json } ));
  }
  render() {
    return (<div>
              <Paper>
              <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
                  <TableRow>
                    <TableHeaderColumn>Adresse</TableHeaderColumn>
                    <TableHeaderColumn>Pris</TableHeaderColumn>
                    <TableHeaderColumn>Svar</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} >
                  {this.state.purchaseApprovals.map(item=>
                    <TableRow key={item.RequestId}>
                      <TableRowColumn>{item.Address}</TableRowColumn>
                      <TableRowColumn>{item.PurchasePrice}</TableRowColumn>
                      <TableRowColumn>{item.Decision}</TableRowColumn>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
              </Paper>
            </div>);
  }
  checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        console.log(response.statusText);
      }
  }
};

export default Customer;