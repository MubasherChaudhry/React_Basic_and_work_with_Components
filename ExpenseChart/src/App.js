// import ExpenseItem from "./components/ExpenseItem";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Black Dress",
    amount: 794.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Gold Chain",
    amount: 31191.99,
    date: new Date(2020, 2, 12),
  },
  {
    id: "e3",
    title: "Coffee Machine",
    amount: 3497.47,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e4",
    title: "A New Dishwasher (BENZ)",
    amount: 1800.99,
    date: new Date(2020, 5, 12),
  },
  {
    id: "e1",
    title: "Black Dress",
    amount: 794.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Gold Chain",
    amount: 31191.99,
    date: new Date(2021, 2, 12),
  },
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
  {
    id: "e1",
    title: "Black Dress",
    amount: 794.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Gold Chain",
    amount: 31191.99,
    date: new Date(2021, 2, 12),
  },
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
  {
    id: "e1",
    title: "Black Dress",
    amount: 794.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Gold Chain",
    amount: 31191.99,
    date: new Date(2021, 2, 12),
  },
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
  {
    id: "e1",
    title: "Black Dress",
    amount: 794.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Gold Chain",
    amount: 31191.99,
    date: new Date(2021, 2, 12),
  },
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
  {
    id: "e1",
    title: "Black Dress",
    amount: 794.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Gold Chain",
    amount: 31191.99,
    date: new Date(2021, 2, 12),
  },
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
  {
    id: "e1",
    title: "Black Dress",
    amount: 794.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Gold Chain",
    amount: 31191.99,
    date: new Date(2021, 2, 12),
  },
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
  {
    id: "e1",
    title: "Black Dress",
    amount: 794.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Gold Chain",
    amount: 31191.99,
    date: new Date(2021, 2, 12),
  },
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
  {
    id: "e1",
    title: "Black Dress",
    amount: 794.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Gold Chain",
    amount: 31191.99,
    date: new Date(2021, 2, 12),
  },
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
  {
    id: "e1",
    title: "Black Dress",
    amount: 794.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Gold Chain",
    amount: 31191.99,
    date: new Date(2021, 2, 12),
  },
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
  {
    id: "e1",
    title: "Black Dress",
    amount: 794.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Gold Chain",
    amount: 31191.99,
    date: new Date(2021, 2, 12),
  },
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
  {
    id: "e1",
    title: "Black Dress",
    amount: 794.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "Gold Chain",
    amount: 31191.99,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "Coffee Machine",
    amount: 3497.47,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "A New Dishwasher (BENZ)",
    amount: 1800.99,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e1",
    title: "Black Dress",
    amount: 794.12,
    date: new Date(2020, 6, 14),
  },
  {
    id: "e2",
    title: "Gold Chain",
    amount: 31191.99,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e3",
    title: "Coffee Machine",
    amount: 3497.47,
    date: new Date(2021, 4, 28),
  },
  {
    id: "e4",
    title: "A New Dishwasher (BENZ)",
    amount: 1800.99,
    date: new Date(2021, 3, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) =>{
    return[expense, ...prevExpenses]
    })
  };

  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
