import styled from "styled-components";

const Text = styled.span`

${({ color }) => (color ? ` color : ${color};` : "")}
${({ size }) => (size ? `font-size : ${size};` : "")}
${({ weight }) => (weight ? ` font-weight : ${weight};` : "")}
${({ decoration }) => (decoration ? `text-decoration : ${decoration};` : "")}
${({ shadow }) => (shadow ? ` text-shadow : ${shadow};` : "")}
${({ list }) => (list ? `list-style : ${list};` : "")}
`;

export default Text;
