import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Form, Button, Input, Container, Wrapper } from './Searchbar.elements'

const Searchbar = ({ loading, handleSearch, handleInput, input, barOpened, setBarOpened }) => {

  const formRef = useRef();
  const inputFocus = useRef();


  return (
    <>

      <Container>
        <Wrapper loading={loading}>

          <Form
            barOpened={barOpened}
            onClick={() => {
              // When form clicked, set state of baropened to true and focus the input
              setBarOpened(true);
              inputFocus.current.focus();
            }}
            // on focus open search bar
            onFocus={() => {
              setBarOpened(true);
              inputFocus.current.focus();
            }}
            // on blur close search bar
            onBlur={() => {
              setBarOpened(false);
            }}
            // On submit, call the onFormSubmit function
            onSubmit={(event) => handleSearch(event, input)}
            ref={formRef}
          >
            <Button type="submit" barOpened={barOpened}>
              Search
          </Button>
            <Input
              onChange={handleInput}
              ref={inputFocus}
              value={input}
              barOpened={barOpened}
              placeholder="Search by Username"
            />
          </Form>

        </Wrapper>
      </Container>
    </>
  )
}

export default Searchbar
