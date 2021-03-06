import * as React from "react";

import "./App.css";

export default function App() {
  //[items inside the component state, fuction called to update the items]
  //("default data")
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string | undefined>("");
  const [color, setColor] = React.useState<string | undefined>("red");
  const [gender, setGender] = React.useState<string>("Female");
  const [Text, setText] = React.useState<any>("");

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const changeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, age, gender, color);
  };

  const changeGender = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setGender(event.target.value);
  };

  const resetInputField = () => {
    setName("");
    setAge("");
    setColor("red");
    setGender("Female");
    setText("");
  };

  return (
    <div className="pa-16">
      <div className="pa-16-1">
        <form onSubmit={handleSubmit}>
          <header>Fill the Form!</header>
          <Input name="Name" value={name} onChange={changeName} />
          <Input name="Age" value={age} onChange={changeAge} />
          <RadioInput name="Gender" onChange={changeGender} checked={gender} />

          <Select name="Favourite Color" value={color} onChange={changeColor} />
          <button
            onClick={() =>
              setText(
                `${name} is ${age} years old, and ${
                  gender === "Female" ? "she" : "he"
                } likes ${color} .`
              )
            }
            type="submit"
            className="btn-primary mb-16"
          >
            Submit
          </button>
          <button onClick={resetInputField} className="btn-secondary">
            Clear
          </button>
        </form>
      </div>
      <div className="pa-16-2">{Text}</div>
    </div>
  );
}

type InputRadioType = {
  name: string;
  checked: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioInput = ({ name, onChange, checked }: InputRadioType) => {
  const isRadioSelected = (value: string): boolean => checked === value;
  return (
    <div className="mb-16">
      <label>{name}</label>
      <div className="radiostyle">
        <div>
          <input
            type="radio"
            name={name}
            value="Female"
            onChange={onChange}
            checked={isRadioSelected("Female")}
          />
          <span>Female</span>
        </div>
        <div>
          <input
            type="radio"
            name={name}
            value="Male"
            onChange={onChange}
            checked={isRadioSelected("Male")}
          />
          <span> Male</span>
        </div>
      </div>
    </div>
  );
};

type InputType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange, name }: InputType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

type SelectType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ value, onChange, name }: SelectType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <select value={value} onChange={onChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};
