import './App.css';
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom';

const Todo = () => {
  return <p>這是 Todo 頁面</p>;
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const About = () => {
  return <p>這是關於我們頁面</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/about">
            <p>關於我們</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<p>這是首頁</p>} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="todo" element={<Todo />} />
          <Route path="/about" element={<About />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>不存在的路由！</p>
              </main>
            }
          />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
