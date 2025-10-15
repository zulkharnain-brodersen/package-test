# @zulkharnain-brodersen/react-smart-form

A lightweight and flexible React form component that dynamically generates forms based on an array of objects. Ideal for rapid form creation with minimal configuration.


## Installation
```sh
npm install @zulkharnain-brodersen/react-smart-form
# or
yarn add @zulkharnain-brodersen/react-smart-form

```

## Usage

```sh

import React from "react";
import SmartForm from "@zulkharnain-brodersen/react-smart-form";

const formData = [
  { label: "Name", name: "name", type: "text", required: true },
  { label: "Email", name: "email", type: "email", required: true },
  { label: "Age", name: "age", type: "number" },
];

const App = () => {
  const handleSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return <SmartForm fields={formData} onSubmit={handleSubmit} />;
};

export default App;


```

## Example for Form

```sh

{
    name: "username",
    label: "Username",
    validations: [(v: string) => (!v ? "Required" : null)]
}

```


