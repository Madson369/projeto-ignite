import "./App.css";
import Modal from "react-modal";
import { GlobalStyle } from "./components/global.styles";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <TransactionsProvider>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        handleCloseNewTransactionModal={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
