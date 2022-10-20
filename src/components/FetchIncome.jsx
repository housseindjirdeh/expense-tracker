import React, { useState, useEffect } from "react";
import { database } from "../detabase/indexedDB";

export default function FetchIncome() {
  const [income, setIncome] = useState([]);

  const getIncome = async () => {
    (await database).getAll("incomeStore").then((data) => {
      setIncome(data);
    });
  };

  useEffect(() => {
    getIncome();
  }, [income]);
  return (
    <section className="income_container">
      <h2>Income Chart</h2>
      <ul className="bold_list">
        <li>Source</li>
        <li>Amount</li>
      </ul>
      {income.map((inc) => (
        <ul key={inc.id}>
          <li>{inc.source}</li>
          <li>{parseInt(inc.amount).toFixed(2)}</li>
        </ul>
      ))}
      <ul className="bold_list">
        <li>Total Income</li>
        <li>Amount</li>
      </ul>
    </section>
  );
}
