import React from 'react'
import { Component } from 'react'

export default class ClassCompo extends Component {
 
        
       state={
           Name: "",
           Dept:"",
           Rate:"",
           EmpData:[]
        }
  
changeHandle=(event)=>{
    this.setState({[event.target.name]:event.target.value})
    this.setState({[event.target.dept]:event.target.value})
   this.setState({[event.target.rate]:event.target.value})
}

clickHandle=()=>{
  let newObj={
    name:this.state.Name,
    dep:this.state.Dept,
    rate:this.state.Rate,
  }
  this.state.EmpData.push(newObj);
  this.setState({EmpData:this.state.EmpData})
  
}

  render() {
    return (
      <div className='midbox'>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
<form>

      <label htmlFor="name">Name:</label>
      <input type='text' id='name' name="Name"   value={this.state.Name} onChange={this.changeHandle}/> <br/>
     
      <label htmlFor="dept">Departnment:</label>
      <input type='text' id='dept' name="Dept"   value={this.state.Dept} onChange={this.changeHandle}/> <br/>

      <label htmlFor='rating' > Rating:</label>
      <input type='text' id='rating' name="Rate"  value={this.state.Rate} onChange={this.changeHandle}/> <br/>
     
      <button type='button' onClick={this.clickHandle}>Submit</button>
     
      </form>
      <div className='display'>  
      {
        this.state.EmpData.map((item,index)=>{
          return(
       
          <div className='cont' key={index}>
                Name: {item.name} || 
                Departnment: {item.dep}|| 
                Rating: {item.rate}
          </div>
         
          )
        })
      }
      </div>
      </div>
    )
  }
}
