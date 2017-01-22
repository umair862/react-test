import React from 'react';

export class Button extends React.Component{
    constructor(props) {
		super(props);
	}
   _handleSubmit(e) {
        
       this.props.addComment(author.value, body.value);
  }
    render(){
        return(
     <div className="component">
            <h1 className="component-heading">Component 1</h1>
            <button onClick={this._handleSubmit.bind(this)} className="component-button" type="button">Retrieve Data</button>
    </div>
        );
    }
}