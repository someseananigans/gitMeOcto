import styled from "styled-components";



export const Container = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    height: 66px;
`

export const Wrapper = styled.div`
  position: absolute;
  bottom: ${({ loading }) => loading ? '-600%' : '0'};
  opacity: ${({ loading }) => loading ? '0' : '1'};
  transition: .6s all ease-in-out;
`



export const Input = styled.input`
  font-size: 16px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${props => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: white;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
  outline: none;
  }
  &::placeholder {
  color: white;
  }
`

export const Button = styled.button`
  font-weight: 700;
  font-size: 15px;
  line-height: 1;
  pointer-events: ${props => (props.barOpened ? "auto" : "none")};
  cursor: ${props => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

`

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to top, #0d1117, #161c26);
  border: 1px solid #30363d;
  /* Change width of the form depending if the bar is opened or not */
  width: ${props => (props.barOpened ? "30rem" : "5rem")};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${props => (props.barOpened ? "auto" : "pointer")};
  padding: 2rem;
  height: 2rem;
  border-radius: 10px;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    background: #dbffff;
  }
  &:hover ${Button} {
    color: #181818;
  }
  &:hover ${Input} {
    color: #181818;
     &:active {
      outline: none;
      color: #181818;
      }
    &::placeholder {
      color: #181818;
    }
  }
`
