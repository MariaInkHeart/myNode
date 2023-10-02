import styled from "styled-components";

const TableRowContainer = ({ className, children }) => (
	<div className={className}>{children}</div>
);

export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;
	border: ${({ border }) => (border ? " 1px solid #000;" : "none;")};

	& > div {
		display: flex;
		padding: 0 10px;
	}

	& .login-colomn {
		width: 172px;
	}

	& .registered-at-colomn {
		width: 213px;
	}

	& .role-colomn {
		width: auto;
	}
`;
