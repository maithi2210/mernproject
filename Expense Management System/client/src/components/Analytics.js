import { Progress } from "antd";
import React from "react";

const Analytics = ({ allTransaction }) => {
  // category list
  const categories = [
    "salary",
    "project",
    "tax",
    "fees",
    "medical",
    "food",
    "movie",
    "clothing",
    "bills",
  ];
  const totalTransaction = allTransaction.length;
  const totalIncomeTransactions = allTransaction.filter(
    (transaction) => transaction.type === "income"
  ).length;
  const totalExpenseTransactions = allTransaction.filter(
    (transaction) => transaction.type === "expense"
  ).length;
  const totalIncomePercent = (totalIncomeTransactions / totalTransaction) * 100;
  const totalExpensePercent =
    (totalExpenseTransactions / totalTransaction) * 100;

  // total turnover
  const totalTurnover = allTransaction.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalIncomeTurnover = allTransaction
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalExpenseTurnover = allTransaction
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalIncomeTurnoverPercent =
    (totalIncomeTurnover / totalTurnover) * 100;
  const totalExpenseTurnoverPercent =
    (totalExpenseTurnover / totalTurnover) * 100;

  return (
    <>
      {/* Using d-flex flex-wrap to place all elements in a single row */}
      <div className="d-flex flex-wrap m-3">
        {/* Total Transactions */}
        <div className="card m-2" style={{ minWidth: "250px" }}>
          <div className="card-header">
            Total Transactions : {totalTransaction}
          </div>
          <div className="card-body">
            <h5 className="text-success">Income : {totalIncomeTransactions}</h5>
            <h5 className="text-danger">
              Expense : {totalExpenseTransactions}
            </h5>
            <div className="d-flex">
              <Progress
                type="circle"
                strokeColor={"green"}
                className="mx-2"
                percent={totalIncomePercent.toFixed(0)}
              />
              <Progress
                type="circle"
                strokeColor={"red"}
                className="mx-2"
                percent={totalExpensePercent.toFixed(0)}
              />
            </div>
          </div>
        </div>

        {/* Total Turnover */}
        <div className="card m-2" style={{ minWidth: "250px" }}>
          <div className="card-header">Total Turnover : {totalTurnover}</div>
          <div className="card-body">
            <h5 className="text-success">Income : {totalIncomeTurnover}</h5>
            <h5 className="text-danger">Expense : {totalExpenseTurnover}</h5>
            <div className="d-flex">
              <Progress
                type="circle"
                strokeColor={"green"}
                className="mx-2"
                percent={totalIncomeTurnoverPercent.toFixed(0)}
              />
              <Progress
                type="circle"
                strokeColor={"red"}
                className="mx-2"
                percent={totalExpenseTurnoverPercent.toFixed(0)}
              />
            </div>
          </div>
        </div>

        {/* Categorywise Income */}
        <div className="card border-dark m-2" style={{ minWidth: "300px" }}>
          <div className="card-header bg-black text-white">
            Categorywise Income
          </div>
          <div className="card-body">
            {categories.map((category) => {
              const amount = allTransaction
                .filter(
                  (transaction) =>
                    transaction.type === "income" &&
                    transaction.category === category
                )
                .reduce((acc, transaction) => acc + transaction.amount, 0);
              return (
                amount > 0 && (
                  <div className="card mb-2">
                    <div className="card-body">
                      <h5>{category}</h5>
                      <Progress
                        percent={((amount / totalIncomeTurnover) * 100).toFixed(
                          0
                        )}
                      />
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>

        {/* Categorywise Expense */}
        <div className="card border-warning m-2" style={{ minWidth: "300px" }}>
          <div className="card-header bg-warning text-white">
            Categorywise Expense
          </div>
          <div className="card-body">
            {categories.map((category) => {
              const amount = allTransaction
                .filter(
                  (transaction) =>
                    transaction.type === "expense" &&
                    transaction.category === category
                )
                .reduce((acc, transaction) => acc + transaction.amount, 0);
              return (
                amount > 0 && (
                  <div className="card mb-2">
                    <div className="card-body">
                      <h5>{category}</h5>
                      <Progress
                        percent={(
                          (amount / totalExpenseTurnover) *
                          100
                        ).toFixed(0)}
                      />
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
