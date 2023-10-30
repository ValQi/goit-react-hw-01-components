import styled from "styled-components";

export const Title = styled.h2`

  padding: ${p => p.theme.spacing(13)} 0;


  background-color: ${p => p.theme.colors.white};

  text-transform: uppercase;
  text-align: center;`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis:0;

  color: ${p => p.theme.colors.white};
  
  background-color: ${getRandomHexColor};
  text-shadow: 3px 3px 10px #000;
  
  padding: ${p => p.theme.spacing(3)};`;
  

export const StatsLabel = styled.span`
  text-align: center;

  margin-bottom: ${p => p.theme.spacing(1)};
  font-size: ${p => p.theme.spacing(4)};`;

export const StatsPercenntage = styled.span`
text-align: center;
  font-size: ${p => p.theme.spacing(5)};`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}