import Modal from "react-modal";
import IncomeImg from "../../assets/entradas.svg";
import OutcomeImg from "../../assets/saidas.svg";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import { TransactionsTable } from "../TransactionsTable";
import { useState, useContext } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";

export function NewTransactionModal(props) {
  const { createTransaction } = useContext(TransactionsContext);
  const [type, setType] = useState("deposit");

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const handleCreateNewTransaction = async (event) => {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    props.handleCloseNewTransactionModal();
  };

  return (
    <Modal
      isOpen={props.isNewTransactionModalOpen}
      onRequestClose={props.handleCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        onClick={props.handleCloseNewTransactionModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="fechar modal"></img>
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"

            // className={type == "deposit" ? "active" : ""}
          >
            <img alt="entrada" src={IncomeImg}></img>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            // className={type == 'withdraw'? 'active':''}

            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img alt="saida" src={OutcomeImg}></img>
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          placeholder="Categoria"
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
