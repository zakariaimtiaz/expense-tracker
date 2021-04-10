import React, { useContext, useEffect } from "react";
import Transaction from "./Transaction";
import { Container, Row, Col } from "react-bootstrap";

import { GlobalContext } from "../context/GlobalState";

const TransactionsList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <Container>
      <h4>Transactions</h4>
      <ul className="list">
        <li>
          <Container>
            <Row>
              <Col xs={5} md={6}>
                Particulars
              </Col>
              <Col xs={3} md={3}>
                Date
              </Col>
              <Col xs={4} md={3} className="text-right">
                Amount
              </Col>
            </Row>
          </Container>
        </li>

        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </Container>
  );
};

export default TransactionsList;
