import React, { Component } from 'react';



class CapitalDropDown extends Component {

    state = {
        
    }
    

    render() {
        return (
            <div id="dropDown">
              <label htmlFor="selectCity">Select another capital</label>
              <select id="selectCity">
                <option value="0">* World Capitals *</option>
              </select>
            </div>
        )
    }
}

export default CapitalDropDown;