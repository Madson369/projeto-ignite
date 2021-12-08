import { Container, Content } from "./styles";
import logoImg from "../../assets/logo.svg";

export function Header(props) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo"></img>

        <button
          onClick={() => {
            props.handleOpenNewTransactionModal();
          }}
        >
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
