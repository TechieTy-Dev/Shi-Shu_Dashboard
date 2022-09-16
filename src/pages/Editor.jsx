import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from '../data/dummy'
import { Header } from '../components'


const Editor = () => {
  return (
    <div className="p-2 m-2 mt-24 bg-white md:p-10 md:m-10 rounded-xl">
    <Header title="Editor" category="App" />
    <RichTextEditorComponent>
      <Inject services={[ HtmlEditor, Image, Link, Toolbar, QuickToolbar]} />
      <EditorData />
    </RichTextEditorComponent>
    </div>
  )
}

export default Editor