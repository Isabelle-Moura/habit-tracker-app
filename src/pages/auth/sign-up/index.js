import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../../services/auth-service.js";
import AuthForm from "../../../components/composite/form/auth-form/index.js";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register({
        username,
        email,
        password,
      });
      toast.success("Registration made successfully! Please log in.");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.error || "Registration failed");
    }
  };

  return (
    <>
      <AuthForm />
    </>
  );
}

export default SignUp;
