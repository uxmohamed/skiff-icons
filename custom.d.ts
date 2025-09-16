// SVG module declarations
declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

// Node.js types
declare namespace NodeJS {
  interface Timeout {}
}
