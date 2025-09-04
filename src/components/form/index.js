import React from "react";
import Heading from "../heading";
import Input from "../input";
import Button from "../button";

function BaseForm({
  title,
  fields,
  onSubmit,
  submitLabel,
  linkText,
  linkHref,
  linkLabel,
}) {
  return (
    <div className="auth-container">
      <Heading level={2}>{title}</Heading>
      <form onSubmit={onSubmit} className="auth-form">
        {fields.map((field, index) => (
          <Input
            key={index}
            type={field.type}
            placeholder={field.placeholder}
            value={field.value}
            onChange={field.onChange}
            required={field.required ?? true}
          />
        ))}
        <Button type="submit" variant="primary">
          {submitLabel}
        </Button>
      </form>
      <p className="auth-link">
        {linkText} <a href={linkHref}>{linkLabel}</a>
      </p>
    </div>
  );
}

export default BaseForm;
