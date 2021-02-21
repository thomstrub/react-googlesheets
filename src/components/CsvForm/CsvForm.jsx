import React from 'react';
import {Button, Form, Container, Header} from 'semantic-ui-react';
import './CsvForm.css';

export default function CsvForm({state, changeHandler, submitHandler}){

    const {name, age, salary, hobby} = state;
    return(
        <Container fluid className="container">
        <Header as='h2'>React Google Sheets!</Header>
        <Form className="form" onSubmit={submitHandler}>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Enter your name' type="text" name="name" value={name} onChange={changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder='Enter your age' type="number" name="age" value={age} onChange={changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input placeholder='Enter your salary' type="number" name="salary" value={salary} onChange={changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input placeholder='Enter your hobby' type="text" name="hobby" value={hobby} onChange={changeHandler}/>
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
}