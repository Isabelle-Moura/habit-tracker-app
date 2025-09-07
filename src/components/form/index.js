import React from "react";
import Heading from "../heading/index.js";
import Input from "../input/index.js";
import Button from "../button/index.js";

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
    <div className="container">
      <Heading level={2}>{title}</Heading>
      <form onSubmit={onSubmit} className="form">
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
      <Button variant="link" href={linkHref}>{linkLabel}</Button>
    </div>
  );
}

export default BaseForm;
