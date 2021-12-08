import { useEffect, useState, useContext } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import { TransactionsContext } from "../../TransactionsContext";

export function TransactionsTable() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  const data = useContext(TransactionsContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.length > 0
            ? transactions.map((i) => {
                console.log(i);

                return (
                  <tr>
                    <td>{i.title}</td>
                    <td className={i.type}>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(i.amount)}
                    </td>
                    <td>{i.category}</td>
                    <td>
                      {new Intl.DateTimeFormat("pt-BR", {}).format(
                        new Date(i.createdAt)
                      )}
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </Container>
  );
}
