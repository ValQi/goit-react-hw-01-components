import styled from "styled-components";

const TransHeader = styled.th`

  width: calc(100% /3);
  padding: ${p => p.theme.spacing(15)};
  text-transform: uppercase;

  background-color: ${p => p.theme.colors.smokeBlue};
  border-right: 1px solid ${p => p.theme.colors.white};`;


export const TransHead = () => {
  return (
  <thead>
    <tr>
      <TransHeader>Type</TransHeader>
      <TransHeader>Amount</TransHeader>
      <TransHeader>Currency</TransHeader>
    </tr>
  </thead>
  );
}