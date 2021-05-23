import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Form, Button, Input, Container, Wrapper } from './Searchbar.elements'

const Searchbar = ({ loading }) => {

  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();

  const onFormSubmit = e => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault();
    setInput("");
    setBarOpened(false);
    // After form submit, do what you want with the input value
    console.log(`Form was submited with input: ${input}`);
  };

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
            onSubmit={onFormSubmit}
            ref={formRef}
          >
            <Button type="submit" barOpened={barOpened}>
              Search
          </Button>
            <Input
              onChange={e => setInput(e.target.value)}
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
