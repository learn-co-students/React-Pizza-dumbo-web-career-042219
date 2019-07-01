import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

	state = {
		allThePies: [],
		currentPie: {
			currentId: '',
			currentTopping: '',
      		currentSize: '',
      		currentVeg: false
		}
}
	componentWillMount() {
		fetch('http://localhost:3000/pizzas')
			.then(resp => resp.json())
			.then(spicyPies => {
				const ourPies = spicyPies
				this.setState({ allThePies: ourPies})
			})
}

	editThisOne = (e) => {
		let selectedPie = this.state.allThePies.filter(pizza => pizza.id == e.target.id)
		this.setState ({ 
			currentPie: selectedPie[0],
				currentId: selectedPie[0].id,
				currentTopping: selectedPie[0].topping,
				currentSize: selectedPie[0].size,
				currentVeg: selectedPie[0].vegetarian,
		})
		console.log(this.state.currentPie)
	}

  handleToppingChange = (e) => {
  	const updatedPie = {...this.state.currentPie, topping: e.target.value }
    this.setState ({ currentPie: updatedPie })
  }

  handleSizeChange = (e) => {
  	const updatedPie = {...this.state.currentPie, size: e.target.value }
    this.setState ({ currentPie: updatedPie })
  }

  handleVegChange = (e) => {
  	const updatedPie = {...this.state.currentPie, vegetarian: e.target.value }
    this.setState ({ currentPie: updatedPie })
  }

  makeAChange = () => {
  	console.log('im looking at the maaaan in the mirror')
  	fetch(`http://localhost:3000/pizzas/${this.state.currentPie.id}`, {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  method: 'PATCH',                                                              
  body: JSON.stringify( this.state.currentPie )                                        
}); 
  	let myLilPie = this.state.allThePies.findIndex(pizza => pizza.id == this.state.currentPie.id)
  	let myLilPies = this.state.allThePies
  	myLilPies[myLilPie] = {...this.state.currentPie}
  	this.setState ({ allThePies: myLilPies })
}


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm makeAChange={this.makeAChange} currentPie={this.state.currentPie} handleVegChange={this.handleVegChange} handleSizeChange={this.handleSizeChange} handleToppingChange={this.handleToppingChange} />
        <PizzaList ourPizzas={this.state.allThePies} editPie={this.editThisOne} />
      </Fragment>
    );
  }
}

export default App;
