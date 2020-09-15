import React from 'react';
import marked from 'react-marked';

import './index.css';
import {explainerText} from './explainerText'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorInput: explainerText,
    
    };
 this.handleChange = this.handleChange.bind(this); 
   
  }
 handleChange(event) { 
   this.setState({editorInput: event.target.value               
                 });      
 }
  
  render() {
    return (
      <div>
        <h1>_Markdown Previewer_</h1>
        <h3>Enter some text to be converted</h3>  
        <Editor value={this.state.editorInput} onChange={this.handleChange} />
        <h3>Here is what your markdown looks like in HTML</h3> 
        <Previewer output={this.state.editorInput} />
        
      </div>  
    );
  }
};

function Editor(props){
  return <textarea id="editor" value={props.value} onChange={props.onChange}></textarea>
}

function Previewer(props){
  return <p id="preview" dangerouslySetInnerHTML={{__html: marked(props.output)}}></p>
}



export default App;
