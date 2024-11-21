import { Link } from 'react-router-dom';
import './home.css';

const Home = ({ data }) => {
  return (
    <div className="home-container">
      <h2>Task List</h2>
      {data !== null ? (
        <ul>
          {data.map((item) => (
            <li key={item._id}>
              <Link to={`/${item._id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;