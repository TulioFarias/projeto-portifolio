import styled from 'styled-components'

export const ContainerForms = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const ContainerDivs = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid white;
  width: 60%;
  min-width: max-content;
  justify-content: space-evenly;
  min-height: max-content;
  height: 500px;
  border-radius: 10px;
  padding: 15px;
  gap: 50px;
  backdrop-filter: blur(10px);
`
export const DivOne = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 350px;
  border-radius: 10px;
  background-color: #e4e4e4;
  gap: 8px;

  label {
    margin-top: 10px;
    margin-left: 5px;
  }

  input {
    width: 300px;
    border: 1px solid;
    border-radius: 10px;
    padding: 5px;
    font-size: 16px;
    outline: none;
  }

  button {
    margin-top: 20px;
    border-radius: 10px;
    background: linear-gradient(to bottom right, #00c0ff, #4218b8);
    color: white;
    font-size: 20px;
    border: none;
    padding: 5px;

    &:hover {
      transform: scale(1.02);
      transition: 0.4s all ease-in-out;
    }
  }
`

export const DivTwo = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: column;
  padding: 10px;
  height: 350px;
  border-radius: 10px;
  background-color: #e4e4e4;
  min-height: max-content;
  overflow: auto;

  .tabela {
    height: 201px;

    div {
      display: flex;
      gap: 10px;
    }
  }
`

export const FormEdit = styled.div`
  width: 450px;
  height: 400px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid white;
  color: white;
  padding: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 300px;
    gap: 5px;
    min-height: max-content;

    label {
      margin-top: 10px;
      margin-left: 5px;
    }

    input {
      width: 300px;
      border: 1px solid;
      border-radius: 10px;
      padding: 10px 0px 10px 10px;
      font-size: 16px;
      outline: none;
      border: none;
    }
  }
`
