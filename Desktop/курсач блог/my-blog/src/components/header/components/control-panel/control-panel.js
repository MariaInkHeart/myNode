import styled from "styled-components";
import { Icon } from "../../../index";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../button/button";
import { ROLE } from "../../../../constants";
import { useSelector, useDispatch } from "react-redux";
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from "../../../../selectors";
import { logout } from "../../../../actions";

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const dispatch = useDispatch();
	const session = useSelector(selectUserSession);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<Icon
							id="fa-sign-out"
							margin="0 0 0 10px"
							onClick={() => dispatch(logout(session))}
						/>
					</>
				)}
			</RightAligned>
			<RightAligned>
				<Icon
					id="fa-backward"
					margin="10px 0 0 0"
					onClick={() => navigate(-1)}
				/>
				<Link to="/post">
					<Icon
						id="fa-file-text-o"
						margin="10px 0 0 16px"
					/>
				</Link>
				<Link to="/users">
					<Icon
						id="fa-users"
						margin="10px 0 0 16px"
					/>
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
