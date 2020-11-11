import styled from "styled-components";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export const IncompleteTodo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 4px auto;
	color: #fff;
	overflow-wrap: anywhere;
	background: linear-gradient(
		90deg,
		rgba(255, 118, 20, 1) 0%,
		rgba(255, 84, 17, 1) 100%
	);

	padding: 16px;
	border-radius: 5px;
	width: 90%;

	&:nth-child(4n + 1) {
		background: linear-gradient(
			90deg,
			rgba(93, 12, 255, 1) 0%,
			rgba(155, 0, 250, 1) 100%
		);
	}

	&:nth-child(4n + 2) {
		background: linear-gradient(
			90deg,
			rgba(255, 12, 241, 1) 0%,
			rgba(250, 0, 135, 1) 100%
		);
	}

	&:nth-child(4n + 3) {
		background: linear-gradient(
			90deg,
			rgba(20, 159, 255, 1) 0%,
			rgba(17, 122, 255, 1) 100%
		);
	}
`;

export const CompleteTodo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 4px auto;
	color: #fff;
	overflow-wrap: anywhere;
	background: linear-gradient(
		90deg,
		rgba(255, 118, 20, 1) 0%,
		rgba(255, 84, 17, 1) 100%
	);

	padding: 16px;
	border-radius: 5px;
	width: 90%;

	&:nth-child(4n + 1) {
		background: linear-gradient(
			90deg,
			rgba(93, 12, 255, 1) 0%,
			rgba(155, 0, 250, 1) 100%
		);
	}

	&:nth-child(4n + 2) {
		background: linear-gradient(
			90deg,
			rgba(255, 12, 241, 1) 0%,
			rgba(250, 0, 135, 1) 100%
		);
	}

	&:nth-child(4n + 3) {
		background: linear-gradient(
			90deg,
			rgba(20, 159, 255, 1) 0%,
			rgba(17, 122, 255, 1) 100%
		);
	}

	text-decoration: line-through;
	opacity: 0.4;
`;

export const TodoIcons = styled.div`
	display: flex;
	align-items: center;
	margin: 0 5px;
	font-size: 24px;
	cursor: pointer;
`;

export const TodoIconEdit = styled(EditIcon)`
	margin-right: 5px;
	color: #fff;

	&:hover {
		transform: scale(1.1);
	}
`;

export const TodoIconDelete = styled(DeleteForeverIcon)`
	color: #fff;

	&:hover {
		transform: scale(1.1);
	}
`;
