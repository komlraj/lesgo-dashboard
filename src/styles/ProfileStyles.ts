import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 72px auto 0 auto;
  padding: 20px 40px 40px 40px;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.textColor};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
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
  color: ${({ theme }) => theme.textColor};
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.textColor};
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    outline: none;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.textColor};
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;

export const SubmitButton = styled.button`
  color: ${({ theme }) => theme.buttonText};
  background: ${({ theme }) => theme.primary};
  font-weight: 600;
  margin-top: 24px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100px;

  &:hover {
    background: ${({ theme }) => theme.buttonBg};
  }
`;

export const ProfileCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 20px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const EditButton = styled.button`
  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
  font-weight: 600;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  text-decoration: underline;

  &:hover {
    text-decoration-color: ${({ theme }) => theme.buttonBg};
  }
`;
