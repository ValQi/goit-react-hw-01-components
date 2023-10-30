import { List} from "./friendlist.styled";
import { ListItems } from "./friend-item/friend-item";

export const Friendlist = ({friends}) => {
  return (
    <List>
      <ListItems friends = {friends}></ListItems>
    </List>
  );
}