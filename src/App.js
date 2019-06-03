import React from 'react';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';

function App() {
  return (
    <div className="App">
      <FroalaEditorComponent tag='textarea'/>
    </div>
  );
}

export default App;
