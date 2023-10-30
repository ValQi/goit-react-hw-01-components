import { Avatar, DescriptionWrapper, UserInfo, UserName } from "./profile-desc.styled"

export const Description = ({imgUrl,username,userTag,userLocation} ) => {
  return (
    <DescriptionWrapper >
        <Avatar src={imgUrl} alt="User avatar"/>
        <UserName>{username}</UserName>
        <UserInfo>@{userTag}</UserInfo>
        <UserInfo>{userLocation}</UserInfo>
      </DescriptionWrapper>
  )
}