import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const Form = styled.form`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #F47838;
  }
`;

export const Button = styled.button`
  background-color: #F47838;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #F47838;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
`;
