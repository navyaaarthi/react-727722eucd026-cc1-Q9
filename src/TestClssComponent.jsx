import React, { Component } from 'react'

export default class TestClssComponent extends Component {
    constructor (props)
    {
        super(props);
            this.state = {
                
                text:'',
            
        };
    }
    handleClick = () =>
    {
        this.setState(prevState =>
            {
                return{
               count : prevState.count+1
                }
            }
            )
    }
    handleChange = (e) =>
    {
        this.setState(prevState =>
            {
                return{
                  text : e.target.value
                }
            }
            )
    }
  render() {
    return (
      <div>
      
      <div>
      <textarea rows="5" cols="30" value={this.state.text} onChange={this.handleChange}></textarea>
      <p>Current Value:
      {this.state.text}</p>
      </div>
      </div>
    )
  }
}