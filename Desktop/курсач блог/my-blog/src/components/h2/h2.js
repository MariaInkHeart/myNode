import styled from "styled-components";

const H2Conrainer = ({ children, className }) => (
	<h2 className={className}>{children}</h2>
);

export const H2 = styled(H2Conrainer)`
	margin: 40px 0;
`;
