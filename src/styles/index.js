import styled from 'styled-components'

export const ContainerPanel = styled.div`
  width:20%;
  display:flex;
  background-color:#01263d;
  align-items: center;
  flex-direction:column;
  justify-content:center;
  z-index:10;
`

export const Button = styled.a`
  height:5%;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#FFF;
  font-size:1.3rem;
  font-weight:700;
  border-radius:.6rem;
  width:60%;
  background-color:#ef4043;
  transition: background-color .3s;

  &:hover{
    background-color:#be1e2d;
  }
`

export const Input = styled.input`
  height:4%;
  width:60%;
  border: solid 2px #FFF;
  background-color:#01263d;
  border-radius:10rem;
  margin-bottom:5%;
  outline:none;
  text-align:center;
  color:#FFF;
  font-weight:700;
  font-size:.9rem;
  ::placeholder{
    color:#FFF;
    font-weight:700;
    text-align:center;
    font-size:.9rem;
  }

`

export const Dropdown = styled.select`
  height:4%;
  width:60%;
  margin-bottom:5%;
  border: solid 2px #FFF;
  background-color:#01263d;
  border-radius:10rem;
  text-align:center;
  color:#FFF;
  font-weight:700;
  font-size:.9rem;
  outline:none;
`

export const Container = styled.div`
  display:flex;
  width: 100%;
  flex-direction: row;
  height:100vh;

`