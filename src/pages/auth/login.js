import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./auth.css"; 
import { login } from "../../services/auth-service.js";
import BaseForm from "../../components/form/index.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      localStorage.setItem("token", response.token);
      toast.success("Login made successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <BaseForm
      title="Login"
      fields={[
        { type: "email", placeholder: "Enter your email", value: email, onChange: setEmail },
        { type: "password", placeholder: "Enter your password", value: password, onChange: setPassword },
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