import React from 'react';
import { IProps } from '../../Types';
export interface MarkdownProps extends IProps, React.HTMLAttributes<HTMLPreElement> {
}
export default function Markdown(props: MarkdownProps): import("react/jsx-runtime").JSX.Element;
