import React, { Component } from 'react';
import logo from './logo.svg';
import './AgeCalculator.css'



export class AgeCalculator extends Component
{
    constructor(props)
    {
      super(props);
      this.state = {date: '',buttonSelected: 'true'}
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleOnClick = this.handleOnClick.bind(this);
    }
handleOnClick (event) 
{

    this.setState({buttonSelected :true, date : ''});

    
 
  

}

    handleTextChange(event)
    {
        this.setState({date:event.target.value, buttonSelected:false})  
    }

    
    render()    {

        var date = this.state.date;
        var completedate = date.split("-");
        var birthYear = completedate[0];
        var birthMonth = completedate[1];
        var birthDay = completedate[2];
        var completeDate = new  Date();
        var currentDay = completeDate.getDay()
        var  currentMonth = completeDate.getMonth() +1 ;
        var currentYear = completeDate.getFullYear();

        var isvalid = !(birthYear && birthDay && birthMonth) ?  false  : age < 0 ? false : true;

        if(isvalid)
        {
            var age =  currentYear-birthYear;
            if(age >= 0)
            {
                var month = currentMonth-birthMonth; 
                if(month < 0)
                {
                    age =  age -1;
                }

                if(month == 0)
                {
                    var day = currentDay-birthDay;      
                    if(day < 0)
                    {
                        age = age -1;
                    }
                }
            }
     
        }

        var message = this.state.buttonSelected ? 'Please Enter Your Age ' : isvalid  ? "Your age is " + age : "Invalid age "

        return  (
            <div className='ageCalculator'>
            <input className='datebox' value={this.state.date} onChange={this.handleTextChange} type="date"/>
            
            <button  className='button secondary' name='refresh' onClick={this.handleOnClick}>Refresh</button>
            <h1>{message} </h1>
            </div>
        )

    }
}