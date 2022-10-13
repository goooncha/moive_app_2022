import React, { Component } from 'react'

export default class cake extends Component {

  state ={
    price: 10000,
    dcprice: 0,
  }

  discount = () =>{
    this.setState(current =>({
        dcprice:current.price*0.7
    }))
  }

  render() {
    return (
      <>
        <div>cake</div>
        <h1>cake 가격: {this.state.price} </h1>
        <h2>할인 가격: {this.state.dcprice} </h2>
        <button onClick={this.discount}>할인</button>
      </>
    )
  }
}
