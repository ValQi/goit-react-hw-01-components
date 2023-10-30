import { Description } from './profile-desc/profile-desc';
import { Stats } from './profile-stats/profile-stats';
import styled from "styled-components";

const ProfileWrapper = styled.div`

  margin: ${p => p.theme.spacing(8)} auto;
  padding-top: ${p => p.theme.spacing(2)};
  width: ${p => p.theme.spacing(75)};


  background-color: ${p => p.theme.colors.white};
  border-top-left-radius: ${p => p.theme.radius};
  border-top-right-radius: ${p => p.theme.radius};
  box-shadow: ${p => p.theme.shadow};`;

export const Profile = ({user: { username, tag, location, avatar, stats: { followers, views, likes } }}) => {
  return (
    <ProfileWrapper>
      <Description imgUrl={avatar} username={username} userTag={tag} userLocation={location} />
      <Stats followers={followers} views={views} likes={likes} />
    </ProfileWrapper>)
};