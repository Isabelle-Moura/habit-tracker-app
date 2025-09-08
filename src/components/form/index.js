import React from "react";
import Heading from "../heading/index.js";
import SubHeading from "../subheading/index.js";
import Input from "../input/index.js";
import Button from "../button/index.js";

function BaseForm({
  title,
  subtitle,
  fields,
  onSubmit,
  submitLabel,
  linkText,
  linkHref,
  linkLabel,
}) {
  return (
    <div className="flex flex-center flex-col">
      <Heading level={2}>{title}</Heading>
      <SubHeading level={3}>{subtitle}</SubHeading>
      <form onSubmit={onSubmit} className="form">
        {fields.map((field, index) => (
          <Input
            label={field.label}
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
      <Button variant="link">
      <span>
        {linkText} <a href={linkHref} className="text-bold">{linkLabel}</a>
      </span></Button>
    </div>
  );
}

export default BaseForm;
