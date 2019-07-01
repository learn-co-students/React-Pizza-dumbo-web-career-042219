import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends Component {

  render() {

    const slinginDough = () => {
      return this.props.ourPizzas.map(onePie => <Pizza key={onePie.id} pieDeets={onePie} editPie={this.props.editPie} /> ) }

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          { slinginDough() }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
