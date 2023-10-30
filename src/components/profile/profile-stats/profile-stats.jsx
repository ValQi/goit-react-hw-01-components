import { StatsLable, StatsList, StatsListItem, StatsQuantity } from "./profile-stats.styled"

export const Stats = ({ followers, views, likes}) => {
  return( <StatsList>
        <StatsListItem>
          <StatsLable>Followers</StatsLable>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsListItem>
        <StatsListItem>
          <StatsLable>Views</StatsLable>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsListItem>
        <StatsListItem>
          <StatsLable>Likes</StatsLable>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsListItem>
      </StatsList>)
}