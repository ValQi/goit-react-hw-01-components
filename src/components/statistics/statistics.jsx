import styled from "styled-components";
import { StatsList, Title } from "./statistics.styled";
import { StatsListItem } from './statistics-list'

const StatsWrap = styled.section`
  margin: 0 auto ${p => p.theme.spacing(8)} auto;
  width: ${p => p.theme.spacing(85)};
  box-shadow: ${p => p.theme.shadow};
`;

export const Statistics = ({title, stats}) => {
    return (
        <StatsWrap>
            {title && <Title>{title}</Title>}
            <StatsList>
                <StatsListItem stats={stats}></StatsListItem>
            </StatsList>
        </StatsWrap>
    )
}