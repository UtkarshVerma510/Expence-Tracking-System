import { useState } from "react";

export default function ExpenseForm({addExpense}) {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
    
  };
  const handleChangeName = (e) => {
    setInput(e.target.value);

  };


  const handleSubmit = (e)=>{
    e.preventDefault()
    const newExpense = {
        id: Date.now(),
        date: new Date().toDateString(),
        name: input,
        amount: amount,
    };
    addExpense(newExpense);
    // console.log(input,"and the amount is ", amount)
    setAmount("");
    setInput("");
}


  return (
    <form onSubmit={handleSubmit}>
      <label>Expense name:</label>
      <input type="text"  value = {input} required onChange={handleChangeName} />
      <label>Expanse amount:</label>
      <input
        type="number"
     
        value={amount}
        required
        onChange={handleChangeAmount}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
