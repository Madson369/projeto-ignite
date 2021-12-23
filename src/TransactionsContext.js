import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "./services/api";

const TransactionsProviderProps = {
  children: ReactNode,
};

export const TransactionsContext = createContext({});

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  const createTransaction = async (transactionInput) => {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
