import styled from "styled-components";
import { TransHead } from "./transaction-head";
import { TransBody } from "./transaction-list/transaction-list";

const Table = styled.table`
  margin: 0 auto ${p => p.theme.spacing(1)} auto;
  margin-top:${p => p.theme.spacing(15)};
  
  width: ${p => p.theme.spacing(1)};
  border-collapse: collapse;

  border: 3px solid ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadow};
`;

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TransHead></TransHead>
      <TransBody transactions={transactions}></TransBody>
    </Table>
  );
}