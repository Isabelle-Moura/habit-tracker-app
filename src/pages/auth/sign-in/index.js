import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../../services/auth-service.js";
import Form from "../../../components/ui/form/index.js";
import AuthForm from "../../../components/composite/form/auth-form/index.js";

function SignIn() {
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
    <>
      <AuthForm isSignIn />
    </>
  );
}

export default SignIn;
