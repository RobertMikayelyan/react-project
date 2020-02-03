import styled from "styled-components";

const Block = styled.div`
${({ width }) => (width ? `width:${width};` : "")}
${({ height }) => (height ? ` height:${height};` : "")}

${({ border }) => (border ? ` border: ${border};` : "")}
${({ background }) => (background ? ` background: ${background}; ` : "")}
${({ margin }) => (margin ? ` margin: ${margin}; ` : "")}
${({ padding }) => (padding ? ` padding: ${padding}; ` : "")}
${({ radius }) => (radius ? ` border-radius: ${radius}; ` : "")}
${({ flex }) => (flex ? ` display:flex; ` : "")}
${({ direction }) => (direction ? ` flex-direction: ${direction}; ` : "")}
${({ justifyContent }) =>
  justifyContent ? ` justify-content: ${justifyContent}; ` : ""}
${({ alignItems }) => (alignItems ? ` align-items: ${alignItems}; ` : "")}
${({ shadow }) => (shadow ? ` box-shadow: ${shadow}; ` : "")}
${({ position }) => (position ? ` position: ${position}; ` : "")}
${({ top }) => (top ? ` top: ${top}; ` : "")}
${({ left }) => (left ? ` left: ${left}; ` : "")}
${({ zIndex }) => (zIndex ? ` z-index: ${zIndex}; ` : "")}
${({ overflow }) => (overflow ? ` overflow: ${overflow}; ` : "")}
${({ wrap }) => (wrap ? " flex-wrap:wrap; " : "")}





`;

export default Block;
