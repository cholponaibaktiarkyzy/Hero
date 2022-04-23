import './App.css';
import ExpensesItem from "./components/expensesitem";

function App() {
  const expenseTitle = "Car Insurance";
  const expenseAmount = 293.2;
  return (
      <div>
        <ExpensesItem
            title={expenseTitle}
            price={expenseAmount}
        />
        <ExpensesItem
            title="Book" price="44"/>
        <ExpensesItem
            title="Internet" price="34"
        />
      </div>
  );
}

export default App;