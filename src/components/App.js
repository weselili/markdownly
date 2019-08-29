import React from 'react';
import DocumentContainer from '../containers/DocumentContainer';
import DocListContainer from '../containers/DocListContainer';


export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <DocListContainer />
      <DocumentContainer />
    </>
  );
}
