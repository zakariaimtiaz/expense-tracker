import React, { useContext, useEffect } from "react";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionsList from "./TransactionsList";

import { GlobalContext } from "../context/GlobalState";

const Home = () => {
  const { getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Balance />
      <IncomeExpenses />
      <TransactionsList />
    </>
  );
};

export default Home;
