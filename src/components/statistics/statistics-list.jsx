import { StatsItem, StatsLabel, StatsPercenntage} from "./statistics.styled";

export const StatsListItem  = ({ stats }) => {
  return (stats.map(({ id, label, percentage }) => {
    return (
      <StatsItem key={id}>
        <StatsLabel>{label}</StatsLabel>
        <StatsPercenntage>{percentage}%</StatsPercenntage>
      </StatsItem>);
  }));
}