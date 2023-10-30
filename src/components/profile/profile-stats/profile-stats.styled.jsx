import styled from "styled-components";

export const StatsList = styled.ul`
display: flex;`;

export const StatsListItem = styled.li`

display: flex;
flex-direction: column;
align-items: center;

gap: ${p => p.theme.spacing(2)};
width: calc(100% / 3);

padding-top: ${p => p.theme.spacing(2)};
padding-bottom: ${p => p.theme.spacing(2)};


background-color: ${p => p.theme.colors.smokeBlue};

border: ${p => p.theme.border};`;


export const StatsLable = styled.span`
color: ${p => p.theme.colors.hardGray};
font-size: ${p => p.theme.spacing(4)};`;

export const StatsQuantity = styled.span`
font-size: ${p => p.theme.spacing(4)};
font-weight: 500;`;