import React, {Component} from 'react';

class Radio extends Component {
    render() {
        var data = this.props.data;
        console.log('data: ', data);
        var radioName = this.props.radioName;
        var radio = [];
        for (var i in this.props.radioVal) {
            radio.push(
                <span className="radio" key = {i}>
                    <input 
                        type="radio" 
                        id={radioName+"-"+i} name={radioName} 
                        value={this.props.radioVal[i]} 
                        defaultChecked = {data === this.props.radioVal[i] ? "defaultChecked" : ""}
                        onChange = {function(e){}.bind(this)}
                    ></input>
                    <label htmlFor={radioName+"-"+i}>{this.props.radioVal[i]}</label>
                </span>
            )
        }
        return ( 
            <div className="radio-box">
               {radio}
            </div>
        );
    }
}

export default Radio;
