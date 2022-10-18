import './popup.css'


const Popup=(props)=>{
    const unhidehandler = (event) => {
        event.preventDefault();
        props.hide();
      }
    return( 
        
        <div  class="modal">
        <div class="modal-content">
          <span class="close" onClick={unhidehandler}>&times;</span><br/>
          <span class="m-head">user</span><br/>
          <input type="text"  id="mname" class="input"/><br/>
          <span class="m-head">duration</span><br/>
          <input type="text" id="mph" class="input" /><br/>
          <span>&nbsp;</span>
          <button class="edit">Edit</button>
          <button class="cancelbtn" onClick={unhidehandler}>Cancel</button>
         
        </div>
     </div>
    )
}
export default Popup