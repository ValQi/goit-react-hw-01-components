import styled from "styled-components";


export const TransRow = styled.tr`
  background-color: ${p => p.theme.colors.coolBlue};
  &:nth-child(odd) {
    background-color: ${p => p.theme.colors.hardGray};
  }`;


export const TransRowData = styled.td`

  padding: ${p => p.theme.spacing(15)};
  text-align: center;
  border-right: 2px solid ${p => p.theme.colors.white};
  &:nth-child(1) {
    text-transform: capitalize;
  };
    `;