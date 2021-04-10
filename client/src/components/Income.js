import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import IncomeList from "./IncomeList";

const Income = () => {
  const [category, setCategory] = useState("income");
  const [transDate, setTransDate] = useState("");
  const [particular, setParticular] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      category,
      transDate,
      particular,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };
  return (
    <Container>
      <Row>
        <Col>
          <h4>Add new income</h4>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="transDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="transDate"
                value={transDate}
                onChange={(e) => setTransDate(e.target.value)}
                placeholder="Enter Date"
              />
            </Form.Group>
            <Form.Group controlId="particular">
              <Form.Label>Particular</Form.Label>
              <Form.Control
                type="text"
                name="particular"
                value={particular}
                onChange={(e) => setParticular(e.target.value)}
                placeholder="Enter Particular"
              />
            </Form.Group>
            <Form.Group controlId="amount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Amount"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col>
          <IncomeList />
        </Col>
      </Row>
    </Container>
  );
};

export default Income;
