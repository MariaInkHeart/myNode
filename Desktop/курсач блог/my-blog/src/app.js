import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Header, Footer } from "./components";
import { Authorization } from "./pages/authorization/authorization";

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;
const Content = styled.div`
	padding: 120px 0;
`;

export const App = () => {
	return (
		<AppColumn>
			<Header />
			<Content>
				<Routes>
					<Route
						path="/"
						element={<div>main</div>}
					/>
					<Route
						path="/login"
						element={<Authorization />}
					/>
					<Route
						path="/register"
						element={<div>Register</div>}
					/>
					<Route
						path="/users"
						element={<div>Users</div>}
					/>
					<Route
						path="/post"
						element={<div>New article</div>}
					/>
					<Route
						path="/post/:postId"
						element={<div>Article</div>}
					/>
					<Route
						path="*"
						element={<div>Error</div>}
					/>
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
};
