import React, { useState } from "react";
import { SmartFormProps } from "../types/form.types";
import InputField from "./inputForm";

const SmartForm: React.FC<SmartFormProps> = ({ schema, onSubmit }) => {
  const initialData: Record<string, string> = {};
  const initialErrors: Record<string, string | null> = {};

  schema.forEach((field) => {
    initialData[field.name] = field.initialValue || "";
    initialErrors[field.name] = null;
  });

  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (name: string, value: string) => {
    setData({ ...data, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string | null> = {};
    let hasError = false;

    schema.forEach((field) => {
      if (field.validations) {
        for (let validate of field.validations) {
          const error = validate(data[field.name]);
          if (error) {
            newErrors[field.name] = error;
            hasError = true;
            break;
          }
        }
      }
    });

    setErrors(newErrors);
    if (!hasError) onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {schema.map((field) => (
        <InputField
          key={field.name}
          label={field.label}
          name={field.name}
          value={data[field.name]}
          onChange={handleChange}
          error={errors[field.name]}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SmartForm;
