import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { numberWithCommas } from "../utils/Format";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const incomeAmounts = transactions.map((transaction) =>
    transaction.category === "income" ? transaction.amount : 0
  );
  const expenseAmounts = transactions.map((transaction) =>
    transaction.category === "expense" ? transaction.amount : 0
  );
  const income = incomeAmounts.reduce((acc, item) => (acc += item), 0);
  const expense = expenseAmounts.reduce((acc, item) => (acc += item), 0);
  const total = income - expense;
  const sign = total > 0 ? "money plus" : "money minus";

  return (
    <Container>
      <ul className="list">
        <li>
          <Container>
            <Row className="text-center">
              <Col>
                <h4>Your Balance</h4>
                <span className={sign}>{numberWithCommas(total)}</span>
              </Col>
            </Row>
          </Container>
        </li>
      </ul>
    </Container>
  );
};

export default Balance;
