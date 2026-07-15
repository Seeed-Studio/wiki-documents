// CSS Modules (.module.scss)
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
// 非 module 的 .scss（如有）
declare module '*.scss';

// 静态资源
declare module '*.png'  { const src: string; export default src; }
declare module '*.jpg'  { const src: string; export default src; }
declare module '*.jpeg' { const src: string; export default src; }
declare module '*.gif'  { const src: string; export default src; }
declare module '*.webp' { const src: string; export default src; }
declare module '*.avif' { const src: string; export default src; }

// SVG 同时支持当作 URL 和 React 组件导入
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}
