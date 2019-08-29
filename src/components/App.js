import React from 'react';
import DocumentContainer from '../containers/DocumentContainer';
import DocListContainer from '../containers/DocListContainer';
import AddDocContainer from '../containers/AddDocContainer';
import SwitchContainer from '../containers/SwitchContainer';


export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <AddDocContainer />
      <DocListContainer />
      <SwitchContainer />
      <DocumentContainer />
    </>
  );
}
