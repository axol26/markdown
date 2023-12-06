import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import {marked} from 'marked';

marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer();

function App() {

  const [text, setText] = useState("");

  return (
    <div className="App text-center px-4">
      <h1 className='p-4'>Markdown Previewer</h1>
      <textarea 
        name="text" 
        id="text" 
        rows="10" 
        value={text} 
        className="textarea" 
        onChange={(e) => setText(e.target.value)}
      >

      </textarea>
      <h3 className='mt-3'>Output</h3>
      <Preview markdown={text} />
    </div>
  );
}

function Preview({markdown}) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, {renderer: renderer}),
      }}
      id="preview"
    >

    </div>
  )
}

export default App;
