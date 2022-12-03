import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.primary};
  .nav-items {
    width: 100%;
    text-align: center;
    background-color: #000000;
    span {
      a {
        padding: 0px 10px 0px 10px;
        text-decoration: none;
        cursor: pointer;
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 1px;

        &:hover {
          background-color: red;
          color: #000000;
        }
      }
    }
  }
`;
