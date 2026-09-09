import * as React from "react";

// Provide a ReactSVG type expected by some third-party libraries
// Map it to the standard SVG props for an <svg> element.
declare module "react" {
  // This alias is only for type-checking and has no runtime impact.
  // It satisfies imports like `import { ReactSVG } from "react"`.
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface ReactSVG extends React.SVGProps<SVGSVGElement> {}
}
