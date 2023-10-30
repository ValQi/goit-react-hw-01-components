import { Avatar, ListItem, Status, UserName } from "./friend-item.styled";


export const ListItems = ({ friends }) => {
  return (friends.map(({avatar, name, isOnline, id }) => {
    return (
      <ListItem key={id}>
        <Status $isOnline={isOnline}></Status>
        <Avatar src={avatar} alt="User avatar"></Avatar>
        <UserName>{name}</UserName>
      </ListItem>
    );
  }));
}