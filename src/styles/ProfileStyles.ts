import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 72px auto 0 auto;
  padding: 20px 40px 40px 40px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
  &:focus {
    border-color: #f47856;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
  &:focus {
    border-color: #f47856;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;

export const SubmitButton = styled.button`
  background-color: #f47838;
  color: white;
  font-weight: 600;
  margin-top: 24px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100px;

  &:hover {
    background-color: #f47838;
  }
`;

export const ProfileCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const EditButton = styled.button`
  background-color: #fff;
  color: #f47838;
  font-weight: 600;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  text-decoration: underline;

  &:hover {
    text-decoration-color: #f47856;
  }
`;
