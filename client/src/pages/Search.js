import React, { useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [searchBook, setSearchBook] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchBook(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.search(searchBook)
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container fluid>
      <Jumbotron>
        <h1>(React) Google Books Search</h1>
        <p>Search for and Save Books of Interest</p>
      </Jumbotron>
      <Row>
        <Container>
          <h3>Book Search</h3>
          <h6>Book</h6>
          <Input
            placeholder="Search Google Books"
            onChange={handleInputChange}
          />
          <FormBtn onClick={handleFormSubmit}>Search</FormBtn>
        </Container>
      </Row>
    </Container>
  );
};
export default Search;
