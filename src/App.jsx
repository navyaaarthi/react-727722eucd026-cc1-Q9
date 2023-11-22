
import React, { Component } from 'react'
import './App.css'

export default class Ecommerce extends Component {
    constructor(props){
        super(props);
        this.state = {count: 1}
    }
  

    addtocart = () => {
        alert('Your ' + this.props.title + " Added to cart")
    }

    increase = () => {
        this.setState(prevState => {
            if(prevState.count > 10){
                alert("Only limited stocks available for more details check chitra.co.in")
            } else {
            return {
                count: prevState.count + 1
            }
        }
        })
    }

    decrease = () => {
        
        this.setState(prevState => {
            if(prevState.count > 1){
            return {
                count: prevState.count - 1
            }
        } else {
            return {
                count: 1
            }
        }
        })
    }

  render() {
    return (
      <>
        <div className='card'>
            <h1>{this.props.title}</h1>
            <div>
                <img width="100px" src={this.props.imgUrl} alt="Shoe"/>
            </div>
            <div className='desc'>
                <span>Size: {this.props.size}</span>
                <span>Color: {this.props.color}</span>
                <span>Price: {this.props.price} INR</span>
            </div>
            <div>
                <button onClick={this.decrease}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increase}>+</button>
            </div>
            <div>
                <button onClick={this.addtocart}>Add to cart</button>
            </div>
        </div>
      </>
    )
  }
}