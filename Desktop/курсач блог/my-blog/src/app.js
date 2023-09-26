import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
	padding: 120px 0;
`;

const H2 = styled.h2`
	text-align: center;
`;

const Header = () => <div>Hat</div>;
const Footer = () => <div>Foot</div>;

export const App = () => {
	return (
		<>
			<Header />
			<Content>
				<H2>HELLO WORLD</H2>
				<Routes>
					<Route
						path="/"
						element={<div>main</div>}
					/>
					<Route
						path="/login"
						element={<div>Log in</div>}
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
		</>
	);
};
