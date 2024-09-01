/// <reference types="vite/client" />

declare module '*.svg?react' {
  const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
  export default ReactComponent;
}
