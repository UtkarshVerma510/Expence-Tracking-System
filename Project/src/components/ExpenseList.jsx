
export default function ExpenseList({expenses, deleteExpense, total}){

    return(
        <div>
            {expenses.length ===0 ? "No expenses yet" : expenses.map((exp, key)=>(
                <div key={exp.id}>
             
                <h3>Date: {exp.date}</h3>
                <h3>{exp.name}</h3>
                <h3>{exp.amount}</h3>
                <button  onClick={()=>deleteExpense(exp.id)}>Delete</button>
                </div>
            )) }
            <h2>Total Expense: {total}</h2>
        </div>
    )
}