import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string | null;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange, error }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        style={{ display: "block", marginTop: "5px", padding: "5px" }}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default InputField;
