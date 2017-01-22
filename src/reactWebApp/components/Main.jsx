import React from 'react';
import {Button} from '../components/Button.jsx';
import {Textbox} from '../components/Textbox.jsx';

export class Main extends React.Component{
    constructor(props) {
		super(props);
	}
    render(){
    
        return(
     <div>
            <Button/>
            <Textbox/>
    </div>            
        );
    }
    
}