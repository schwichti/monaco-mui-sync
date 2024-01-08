import './App.css';
import React, { useState } from 'react';

import DynamicComponent from './DynamicComponent'
import Editor from '@monaco-editor/react';

const modelIdentityCard = `
{
  "name": "modelname",
  "description": "this is my awesome model",
  "owner": "Simon Schwichtenberg",
  "version": "1.0.0",
  "confidentiality": "public",
  "license": "MIT"
}
`


function App() {


  const [contents, setContents] = useState(modelIdentityCard);

  function handleEditorWillMount(monaco) {

  }

  function handleEditorDidMount(editor, monaco) {


  }
  function handleChange(event) {



    try {
      const x = JSON.parse(contents);
      x[event.target.id] = event.target.value
      setContents(JSON.stringify(x, null, '\t'))
    } catch (e) {
      console.log(e)
    }

  }

  function handleEditorOnChange(value) {

    try {
      JSON.parse(value);
      setContents(value)
    } catch (e) {
      console.log(e)
    }
  }  

  return (
    <div className="App">
      <div className='textbox'>{DynamicComponent(contents, handleChange)}</div>
      <div className="monaco">
        <Editor
          height="90vh"
          defaultLanguage="json"
          value={contents}
          beforeMount={handleEditorWillMount}
          onMount={handleEditorDidMount}
          onChange={handleEditorOnChange}
        />
      </div>
    </div>
  );
}

export default App;
