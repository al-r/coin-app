import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/CountOutput.css';

class CountOutput extends React.Component {
  calculate(){
    var input = this.props.amount ? this.props.amount : '';
    var number = input.replace(/£|p/g,'');
    var inputP;
    var restP = 0;
    var coinValues = [200,100,50,20,10,5,2,1];
    var nbCoins;
    var count= [];

    //Prepare value to be calculated
    if(input.startsWith('£') || input.includes('.')) {
      inputP = parseInt(number*100);
    } else {
      inputP = parseInt(number);
    }

    //Calculate number of coins
    for(var i=0; i<coinValues.length;i++){
      nbCoins = Math.floor((inputP - restP) / coinValues[i]);
      restP = restP + nbCoins * coinValues[i];

      //Add number of coin to count
      if(nbCoins>0){
        count.push({
          value: nbCoins,
          text: coinValues[i]>99 ? "£"+coinValues[i]/100 : coinValues[i] + "p",
          nameclass: "coin p-"+coinValues[i]
        });
      }
    }

    return count;
    
  }

  render() {
    return (
      <div>
        <ul id="countList">
          {this.calculate().map(item => (
            <li key={item.id}>
              <div className={item.nameclass}>{item.text}</div>
              <div className="count">x{item.value}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CountOutput;