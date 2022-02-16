import { useState } from "react";
import toast from "react-hot-toast";
import { ReactComponent as SearchIcon } from "../Searchbar/search.svg";
import { Form, SearchbarContainer, SearchButton } from "./Searchbar.styled";

export const Searchbar = ({ propSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.currentTarget;
    setValue(value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim() === "") {
      toast.error("Enter query!");
      return;
    }
    propSubmit(value);
    setValue("");
  };

  return (
    <SearchbarContainer>
      <Form onSubmit={handleSubmit}>
        <SearchButton type="submit">
          {" "}
          <SearchIcon width="20" height="20" color="blue" />
        </SearchButton>
        <input
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={value}
        />
      </Form>
    </SearchbarContainer>
  );
};
