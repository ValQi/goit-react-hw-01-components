import { TransRow, TransRowData } from "./transaction-list.styled";




const TransRowItem = ({transactions}) => {
  return (transactions.map(({ id, type, amount,currency}) => {
    return (
      <TransRow key={id}>
        <TransRowData>{type}</TransRowData>
        <TransRowData>{amount}</TransRowData>
        <TransRowData>{currency}</TransRowData>
      </TransRow>
    );
  }));
}


export const TransBody = ({transactions}) => {
  return (
    <tbody>
      <TransRowItem transactions={transactions}></TransRowItem>
    </tbody>
  );
}