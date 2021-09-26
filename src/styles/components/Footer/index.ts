import styled from "styled-components";

export const Wrapper = styled.footer`
	background: ${({ theme }) => theme.footer.background};
	border: none;
	border-top: 1px solid #000;
	padding: 50px 0 10px 0;
	box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
`;
