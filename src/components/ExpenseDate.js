const ExpensesDate = (props) => {
  const {month,year,day}= props
  return (
      <div className="expense-date">
        <div className="expense-date__month">
          <div>{month}</div>
          <div className="expense-date__year">
            <div>{year}</div>
            <div className="expense-date__day">
              <div>{day}</div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default ExpensesDate;