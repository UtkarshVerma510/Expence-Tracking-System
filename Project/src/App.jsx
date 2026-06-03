import { useState } from "react";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";


function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpense(newExpense){
    setExpenses([...expenses, newExpense])
  }

  function deleteExpense(id){
    setExpenses(expenses.filter((item)=>(
      item.id !== id
    )))
  }
  const total = expenses.reduce((acc,next)=>{
   return acc+Number(next.amount);
 },0)

  

  return (
    <div className="min-h-screen text-center  bg-gray-500">
      <h1 className="text-3xl font-bold underline">Expance Tracker</h1>
      <ExpenseForm  addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} total={total} />
    </div>
  );
}

export default App;
