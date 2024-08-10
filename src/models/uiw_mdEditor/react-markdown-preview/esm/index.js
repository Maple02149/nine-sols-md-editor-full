import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import rehypePrism from 'rehype-prism-plus';
import rehypeRewrite from 'rehype-rewrite';
import rehypeAttrs from 'rehype-attr';
import rehypeRaw from 'rehype-raw';
import MarkdownPreview from './preview';
import { reservedMeta } from './plugins/reservedMeta';
import { retrieveMeta } from './plugins/retrieveMeta';
import { rehypeRewriteHandle, defaultRehypePlugins } from './rehypePlugins';
import { jsx as _jsx } from "react/jsx-runtime";
export * from './Props';
export default /*#__PURE__*/React.forwardRef((props, ref) => {
  var _props$disableCopy;
  var rehypePlugins = [reservedMeta, rehypeRaw, retrieveMeta, ...defaultRehypePlugins, [rehypeRewrite, {
    rewrite: rehypeRewriteHandle((_props$disableCopy = props.disableCopy) != null ? _props$disableCopy : false, props.rehypeRewrite)
  }], [rehypeAttrs, {
    properties: 'attr'
  }], ...(props.rehypePlugins || []), [rehypePrism, {
    ignoreMissing: true
  }]];
  return /*#__PURE__*/_jsx(MarkdownPreview, _extends({}, props, {
    rehypePlugins: rehypePlugins,
    ref: ref
  }));
});