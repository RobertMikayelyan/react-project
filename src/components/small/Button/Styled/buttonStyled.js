import styled from "styled-components";

const ButtonStyled = styled.button`

${({ width }) => (width ? `width:${width};` : "")}
${({ height }) => (height ? ` height:${height};` : "")}
${({ color }) => (color ? ` color : ${color};` : "")}
${({ size }) => (size ? `font-size : ${size};` : "")}
${({ weight }) => (weight ? ` font-weight : ${weight};` : "")}
${({ decoration }) => (decoration ? `text-decoration : ${decoration};` : "")}
${({ shadow }) => (shadow ? ` text-shadow : ${shadow};` : "")}
`;

export default ButtonStyled;
