import React from "react";
import { useState } from "react";
import "./form.css";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <div className="container-form">
      <div className="container-input">
        <label>Descrição:</label>
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="container-input">
        <label>Valor:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="radio-group">
        <input
          type="radio"
          id="rIncome"
          defaultChecked
          name="
        group1"
          onChange={() => setExpense(!isExpense)}
        />
      </div>
      <label htmlFor="rIncome">Entrada</label>
      <input
        type="radio"
        id="rExpenses"
        name="
        group1"
        onChange={() => setExpense(!isExpense)}
      />
      <label htmlFor="rExpenses">Saída</label>
      <button onClick={handleSave()}>ADICIONAR</button>
    </div>
  );
};
export default Form;
