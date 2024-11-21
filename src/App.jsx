import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.jsx';
import ItemDetailPage from './ItemDetailPage.jsx';
import InputCreate from './InputCreate.jsx';
import './home.css';

const App = () => {
  const [data, setData] = useState(null);
  const URL_API = 'http://localhost:3000';

  const FETCH_DATA = async () => {
    try {
      const RESPONSE = await fetch(URL_API);
      const RES_DATA = await RESPONSE.json();
      setData(RES_DATA);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FETCH_DATA();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <div>
              <nav className="nav-link">
                <Link to="/">Home</Link>
                <Link to="/create">Create Task</Link>
              </nav>
              <Home data={data} />
            </div>
          } />
          <Route path="/create" element={<InputCreate />} />
          {data !== null &&
            data.map((item) => (
              <Route key={item._id} path={`/${item._id}`} element={<ItemDetailPage item={item} />} />
            ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;