import React, { Component } from 'react';
import './css/AmountInput.css';
import CountOutput from './CountOutput';

class AmountInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: '', value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
    	<div>
			<form onSubmit={this.handleSubmit}>
				<label for="amount">
					Amount(£)
					<span className="tooltip" title="Give me a value in pounds(£). I will count the minimum number of coins in this amount...">?</span>
				</label>
			    <input type="text" name="amount" value={this.state.value} onChange={this.handleChange} />
			  	<input type="submit" value="Submit" />
			</form>

			<CountOutput amount={this.state.amount} onChange={this.handleChange} />
		</div>
    );
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      amount: this.state.value
    });
  }
}

export default AmountInput;