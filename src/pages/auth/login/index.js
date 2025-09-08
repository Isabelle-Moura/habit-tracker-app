import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../../services/auth-service.js";
import BaseForm from "../../../components/form/index.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      localStorage.setItem("token", response.data.token);
      toast.success("Login made successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <BaseForm
      title="Welcome Back!"
      subtitle="Sign in to access your personalized habit tracking experience."
      fields={[
        { type: "email", label: "E-mail", placeholder: "Enter your email", value: email, onChange: setEmail },
        { type: "password", label: "Password", placeholder: "Enter your password", value: password, onChange: setPassword },
      ]}
      onSubmit={handleLogin}
      submitLabel="Login"
      linkText="Don't have an account?"
      linkHref="/register"
      linkLabel="Register here"
    />
  );
}

export default Login;