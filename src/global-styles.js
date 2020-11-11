import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
      user-select: none;
  }

  body {
    background: linear-gradient(
      90deg,
      rgba(48, 16, 255, 1) 0%,
      rgba(100, 115, 255, 1) 100%
    );
    background-attachment: fixed;
  }

  &::-webkit-scrollbar {
    background: linear-gradient(
      90deg,
      rgba(48, 16, 255, 1) 0%,
      rgba(100, 115, 255, 1) 100%
    );
		width: 5px;
	}

	&::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px grey;
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb {
		background: linear-gradient( 180deg, rgb(255 16 152) 0%, rgba(255,12,241) 100% );
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: rgb(255 16 152);
	}
`;
