// <reference type="vite/client" />

declare module '*.svg?react' {
    import * as React from 'react'
    const ReactComponent: React.FuntionComponent<React.SVGProops<SVGSVGElement>>
    export default ReactComponent
}