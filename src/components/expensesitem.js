import "./expensesitem.css";
import ExpensesDate from "./ExpenseDate";

const ExpensesItem = (props) => {
  const {price, title} = props
  const expenseMonth = "April";
  const expenseYear = 2022;
  const expenseDay = 23;
  return (
      <div className="expense-item">
        <ExpensesDate
            month={expenseMonth}
            year={expenseYear.toString()}
            day={expenseDay.toString()}
        />
        <div className="expense-item__description">
          <h1>{title}</h1>
          <div className="expense-item__price">${price}</div>
        </div>
      </div>
  );
};

export default ExpensesItem;

