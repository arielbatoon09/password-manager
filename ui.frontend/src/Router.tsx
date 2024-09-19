import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage';
import Error from './pages/ErrorPage';
import Signin from './pages/Auth/SigninPage';
import Signup from './pages/Auth/SignupPage';
import Forgot from './pages/Auth/ForgotPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgot />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;