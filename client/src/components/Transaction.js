import React, { useContext } from "react";
import { numberWithCommas } from "../utils/Format";
import dateFormat from "dateformat";
import { Container, Row, Col } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={transaction.category === "expense" ? "minus" : "plus"}>
      <Container>
        <Row>
          <Col xs={5} md={6}>
            {transaction.particular}
          </Col>
          <Col xs={3} md={3}>
            {dateFormat(transaction.transDate, "dd-mm-yyyy")}
          </Col>
          <Col xs={4} md={3} className="text-right">
            {numberWithCommas(transaction.amount)}
          </Col>
          <button
            onClick={() => {
              deleteTransaction(transaction._id);
            }}
            className="delete-btn"
          >
            x
          </button>
        </Row>
      </Container>
    </li>
  );
};

export default Transaction;
