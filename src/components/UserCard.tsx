// src/components/UserCard.tsx
import "../styles/UserCard.scss";

interface User {
    name: {
      first: string;
      last: string;
    };
    picture: {
      large: string;
    };
    email: string;
    location: {
      city: string;
      country: string;
    };
  }
  
  const UserCard = ({ user }: { user: User }) => {
    return (
      <div className="user-card">
        <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
        <h3>{user.name.first} {user.name.last}</h3>
        <p>{user.email}</p>
        <p>{user.location.city}, {user.location.country}</p>
      </div>
    );
  };
  
  export default UserCard;
  