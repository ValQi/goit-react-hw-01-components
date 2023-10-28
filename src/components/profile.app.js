import user from '../user.json';
import { Profile } from './profile';
import styles from './profile-module.cssg';

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>;