import styled from "styled-components";
import Button from '@mui/material/Button';

export const HomepageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  background: DodgerBlue;
  width: 100%;
  height: 40px;
`;

export const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: DeepskyBlue;
  width: 100%;
  height: calc(100% - 40px);
  position: absolute;
  top: 40px;
  left: 0;
  padding-top: 40px;
`;

export const BodyContent = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

export const SeparateBloc = styled.div`
  border: 0.5px solid gainsboro;
  width: 100%;
  box-shadow: 0px 1px grey;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  margin-bottom: 40px;
`;

export const ActionWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
`;

export const StyledInput = styled.input`
  width: 75%;
  height: 40px;
  padding: 0px 10px
`;

export const StyledButton = styled(Button)`
  width: 20%;
  height: 40px;
  background-color: #FCF55F;
  color: black;
  border-radius: 2px;
  text-transform: none;

  &:hover {
    background-color: yellow;
    transform: scale(107%);
  }
`;

export const ResponseWrapper = styled.div<{
    success: boolean | undefined;
  }>`
    width: 100%;
    background-color: ${props => props.success ? 'LightGreen' : 'LightPink'};
    border-radius: 2px;
    margin-top: 40px;
  `;
    
  export const ResponseText = styled.p<{
    success: boolean | undefined;
  }>`
    padding: 20px 0;
    margin-left: 20px;
    color: ${props => props.success ? 'seagreen' : 'indianred'};
  `;
  
  export const Link = styled.a`
    color: seagreen;
  `;