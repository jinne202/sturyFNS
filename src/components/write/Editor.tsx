import React, { useState } from "react";

import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

const Editor = () => {
  const [value, setValue] = useState<string>('');

  const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
  const handleEditor = (value : string) => {
    setValue(value);
  }
  return (
    <>
      <ReactQuill value={value} onChange={handleEditor} theme={'snow'} modules={modules} formats={formats} style={{height : "500px"}}/>
    </>
  )
}


export default Editor;
