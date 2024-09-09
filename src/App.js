import React, { useState, useEffect } from 'react';
import {marked} from 'marked';
import './App.css'; // Importing CSS file for styling

const App = () => {
  const [editorContent, setEditorContent] = useState(defaultMarkdown);

  useEffect(() => {
    // Convert default markdown to HTML and set it in the preview
    document.getElementById('preview').innerHTML = marked(defaultMarkdown);
  }, []);

  const handleEditorChange = (e) => {
    const newContent = e.target.value;
    setEditorContent(newContent);
    document.getElementById('preview').innerHTML = marked(newContent);
  };

  return (
    <div className="app-container">
      <div className="editor-container">
        <textarea
          id="editor"
          value={editorContent}
          onChange={handleEditorChange}
          placeholder="Enter Markdown here..."
          className="editor"
        />
      </div>
      <div
        id="preview"
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(editorContent) }}
      />
    </div>
  );
};

// Default markdown text to be displayed on initial load
const defaultMarkdown = `
# Markdown Previewer

## Welcome to my Markdown Previewer!

You can use the following Markdown elements:

- **Bold Text**
- *Italic Text*
- [Link](https://example.com)
- \`Inline Code\`
  
\`\`\`
Code Block
\`\`\`

1. First item
2. Second item

> Blockquote

![Image](https://via.placeholder.com/150)

Enjoy writing Markdown!
`;

export default App;
