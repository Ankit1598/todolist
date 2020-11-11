import styled from "styled-components";

export const TodoListContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	width: 520px;
	min-height: 600px;
	background: #161a2b;
	text-align: center;
	margin: 5% auto;
	border-radius: 10px;
	padding-bottom: 32px;

	& h1 {
		margin: 32px 0;
		color: #fff;
		font-size: 24px;
	}
`;
