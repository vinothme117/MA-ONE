import React from 'react';
import './Inputbox.css'
function UserInput(props){
    return(
        <>
        <div className='User-input'>
            <input type="text" className='Input-box' placeholder={props.placeholder1} /> 
            <label className='Tlabel'>{props.Lable1value}</label>
        
            <input type="text" className='Input-box' placeholder={props.placeholder2}/> 
            <label className='Tlabel'>{props.Lable2value}</label>
  
            <input type={props.inputtype} className='Input-box' placeholder={props.placeholder3}/> 
            <label className='Tlabel'>{props.Lable3value}</label>
        </div>
        </>
    )
}
export default UserInput