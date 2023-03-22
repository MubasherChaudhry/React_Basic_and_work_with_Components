// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Black Dress",
      amount: 794.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "Gold Chain", amount: 31191.99, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Coffee Machine",
      amount: 3497.47,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "A New Dishwasher (BENZ)",
      amount: 1800.99,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
