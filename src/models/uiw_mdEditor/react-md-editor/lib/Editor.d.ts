import React from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { ContextStore } from './Context';
import type { MDEditorProps } from './Types';
export interface RefMDEditor extends ContextStore {
}
declare const InternalMDEditor: React.ForwardRefExoticComponent<MDEditorProps & React.RefAttributes<RefMDEditor>>;
type EditorComponent = typeof InternalMDEditor & {
    Markdown: typeof MarkdownPreview;
};
declare const Editor: EditorComponent;
export default Editor;
