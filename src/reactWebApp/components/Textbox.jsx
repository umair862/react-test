import React from 'react';

export class Textbox extends React.Component{
    render(){
        return(
     <div className="component">
            <h1 className="component-heading">Component 2</h1>
            <textarea className="component-textbox" placeholder="Please click on Retrieve Data button to get data from API">
            {this.props.fieldVal}
            </textarea>
    </div>
        );
    }
}