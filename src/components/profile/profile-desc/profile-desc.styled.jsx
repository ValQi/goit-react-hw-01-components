import styled from "styled-components";

export const DescriptionWrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(2)} 0;`;

export const Avatar = styled.img`

width: ${p => p.theme.spacing(50)};

border: ${p => p.theme.border};
border-radius: 50%;
`;

export const UserName = styled.p`
font-size: ${p => p.theme.spacing(7)};
font-weight:  900;
`;

export const UserInfo = styled.p`

color: ${p => p.theme.colors.hardGray};
font-size: ${p => p.theme.spacing(5)};`;