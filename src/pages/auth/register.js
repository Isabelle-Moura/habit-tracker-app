import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./auth.css"; 
import { register } from "../../services/auth-service";
import BaseForm from "../../components/form";

function Register() {
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
    <BaseForm
      title="Register"
      fields={[
        { type: "text", placeholder: "Choose a username", value: username, onChange: setUsername },
        { type: "email", placeholder: "Enter your email", value: email, onChange: setEmail },
        { type: "password", placeholder: "Create a password", value: password, onChange: setPassword },
      ]}
      onSubmit={handleRegister}
      submitLabel="Register"
      linkText="Already have an account?"
      linkHref="/login"
      linkLabel="Login here"
    />
  );
}

export default Register;