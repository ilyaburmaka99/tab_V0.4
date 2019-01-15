import styled from 'styled-components'

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  background: #e3e3e3;
  left: 5%;
  position: absolute;
  margin-top: 20px;
`
const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 18px;
  margin:10px 10px 10px 10px;
  background: ${props => props.inputColor || "grey"};
`
const Text = styled.p`
  margin: 20px 0px 0px 20px;
`
export {
  Wrapper,
  Button,
  Text
}
