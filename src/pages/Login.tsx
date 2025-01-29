import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../state/authStore.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Container,
  Form,
  Title,
  Input,
  Button,
  ErrorMessage,
} from "../styles/LoginStyles.ts";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    const success = login(data.email, data.password);
    if (success) {
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Login</Title>

        <Input type="email" {...register("email")} placeholder="Email" />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
}
