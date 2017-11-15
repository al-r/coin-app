import React, { Component } from 'react';
import './CountOutput.css';

class CountOutput extends React.Component {
  calculate(){
    var input = this.props.amount ? this.props.amount : '';
    var number = input.replace(/£|p/g,'');
    var inputP;
    var restP;
    var count= [];
    var nb2pound = {value: '', text: '£2', nameclass: 'coin two-pound'};
    var nb1pound = {value: '', text: '£1', nameclass: 'coin one-pound'};
    var nb50p = {value: '', text: '50p', nameclass: 'coin fifty-p'};
    var nb20p = {value: '', text: '20p', nameclass: 'coin twenty-p'};
    var nb10p = {value: '', text: '10p', nameclass: 'coin ten-p'};
    var nb5p = {value: '', text: '5p', nameclass: 'coin five-p'};
    var nb2p = {value: '', text: '2p', nameclass: 'coin two-p'};
    var nb1p = {value: '', text: '1p', nameclass: 'coin one-p'};
    var amountP;

    //Prepare value to be calculated
    if(input.startsWith('£') || input.includes('.')) {
      inputP = parseInt(number*100);
    } else {
      inputP = parseInt(number);
    }


    //Calculate the number of pound coins
    nb2pound.value = Math.floor(inputP / 100 / 2);
    if(nb2pound.value>0){
      count.push(nb2pound);
    }

    nb1pound.value = Math.floor(inputP / 100 - (nb2pound.value*2));
    if(nb1pound.value>0){
      count.push(nb1pound);
    }

    //Get the value of p
    restP = inputP - ((nb2pound.value * 2 + nb1pound.value) * 100);

    //Calculate the number of p
    nb50p.value = Math.floor(restP/50);
    amountP = nb50p.value * 50;
    if(nb50p.value>0){
      count.push(nb50p);
    }

    nb20p.value = Math.floor((restP - amountP) / 20);
    amountP = amountP + nb20p.value * 20;
    if(nb20p.value>0){
      count.push(nb20p);
    }

    nb10p.value = Math.floor((restP - amountP) / 10);
    amountP = amountP + nb10p.value * 10;
    if(nb10p.value>0){
      count.push(nb10p);
    }

    nb5p.value = Math.floor((restP - amountP) / 5);
    amountP = amountP + nb5p.value * 5;
    if(nb5p.value>0){
      count.push(nb5p);
    }

    nb2p.value = Math.floor((restP - amountP) / 2);
    amountP = amountP + nb2p.value * 2;
    if(nb2p.value>0){
      count.push(nb2p);
    }

    nb1p.value = restP - amountP;
    if(nb1p.value>0){
      count.push(nb1p);
    }

    return count;
    
  }

  render() {
    return (
      <div>
        <ul>
          {this.calculate().map(item => (
            <li>
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