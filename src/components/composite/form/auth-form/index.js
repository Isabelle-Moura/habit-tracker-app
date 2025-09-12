import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Container from "../../../ui/container/index.js";
import Heading from "../../../ui/heading/index.js";
import Input from "../../../ui/input/index.js";
import Checkbox from "../../../ui/checkbox/index.js";
import Button from "../../../ui/button/index.js";
import Divider from "../../../ui/divider/index.js";

function AuthForm({ isSignIn = false }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <Container
      semanticTag="section"
      flex
      direction="col"
      gap="gap-4"
      padding="p-5"
      className="bg-background-light rounded-md"
    >
      {/* Heading */}
      <Container semanticTag="section" flex direction="col" gap="gap-1">
        <Heading level={1}>
          {isSignIn ? "Welcome Back!" : "Join Habit Tracker Today!"}
        </Heading>
        <Heading level={4} weight="normal" className="text-basic-grayStrong">
          {isSignIn
            ? "Sign in to access your personalized habit tracking experience."
            : "Start your habit journey with Habit Tracker. It's quick, easy and free."}
        </Heading>
      </Container>

      {/* Inputs */}

      <Container semanticTag="section" flex direction="col" gap="gap-1">
        <Input
          label="E-mail"
          type="email"
          placeholder={
            isSignIn ? "Enter your e-mail" : "Enter your best e-mail"
          }
          value={email}
          onChange={setEmail}
          icon={IoMdMail}
        />

        <Input
          label="Password"
          type="password"
          placeholder={
            isSignIn ? "Enter your password" : "Choose your password"
          }
          value={password}
          onChange={setPassword}
          icon={FaLock}
        />
      </Container>

      {/* Checkbox / Remember me / Terms */}

      <Container
        semanticTag="section"
        flex
        align="center"
        justify="center"
        gap="gap-1"
      >
        <Checkbox checked={remember} onChange={() => setRemember(!remember)} />
        {isSignIn ? (
          <div className="flex justify-between items-center gap-10">
            <span>Remember me</span>
            <a
              href="#"
              className="text-red-primary hover:text-red-hover text-md"
            >
              Forgot password?
            </a>
          </div>
        ) : (
          <div>
            I agree to Habit Tracker{" "}
            <span className="text-red-primary hover:text-red-hover cursor-pointer">
              Terms & Condition.
            </span>
          </div>
        )}
      </Container>

      {/* Already have account / Sign up link */}

      <Container
        semanticTag="section"
        flex
        align="center"
        justify="center"
        gap="gap-1"
      >
        <div>
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
          <span className="text-orange-primary hover:text-orange-hover cursor-pointer">
            {isSignIn ? "Sign Up" : "Sign in"}
          </span>
        </div>
      </Container>

      {/* Divider */}

      <Divider text="or" />

      {/* Buttons */}

      <Container
        semanticTag="section"
        flex
        direction="col"
        align="center"
        justify="center"
        gap="gap-1"
      >
        <Button
          label="Continue with Google"
          variant="outline"
          iconLeft={FcGoogle}
        />
        <Button label={isSignIn ? "Sign In" : "Sign Up"} />
      </Container>
    </Container>
  );
}

export default AuthForm;
