import styled from "styled-components";

export const List = styled.ul`

  display: flex;
  flex-direction: column;

  gap: ${p => p.theme.spacing(8)};

  margin: 0 auto ${p => p.theme.spacing(1)} auto;
  width: ${p => p.theme.spacing(80)};

`;