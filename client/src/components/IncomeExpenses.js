import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { numberWithCommas } from "../utils/Format";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const incomeAmounts = transactions.map((transaction) =>
    transaction.category === "income" ? transaction.amount : 0
  );
  const expenseAmounts = transactions.map((transaction) =>
    transaction.category === "expense" ? transaction.amount : 0
  );

  const income = incomeAmounts.reduce((acc, item) => (acc += item), 0);
  const expense = expenseAmounts.reduce((acc, item) => (acc += item), 0);

  return (
    <Container>
      <Container className="inc-exp-container">
        <Row className="text-center">
          <Col xs={6} md={{ span: 3, offset: 3 }}>
            <h4>Income</h4>
            <span className="money plus">{numberWithCommas(income)}</span>
          </Col>
          <Col xs={6} md={{ span: 3 }}>
            <h4>Expense</h4>
            <span className="money minus">{numberWithCommas(expense)}</span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default IncomeExpenses;
