import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 264.67,
      date: new Date(2020, 7, 25),
    },
    {
      id: "e3",
      title: "New TV",
      amount: 500.0,
      date: new Date(2020, 7, 7),
    },
    {
      id: "e4",
      title: "Rent",
      amount: 400.0,
      date: new Date(2020, 8, 1),
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
