import Modal from "react-modal";
import IncomeImg from "../../assets/entradas.svg";
import OutcomeImg from "../../assets/saidas.svg";
import { Container, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import { TransactionsTable } from "../TransactionsTable";

export function NewTransactionModal(props) {


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
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />
        <input placeholder="Valor" />

        <TransactionTypeContainer>
          <button>
            <img alt='entrada' src={IncomeImg}></img>
            <span>Entrada</span>
          </button>
          <button>
            <img alt='saida' src={OutcomeImg}></img>
            <span>Saida</span>
          </button>
        </TransactionTypeContainer>
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
