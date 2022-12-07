import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<QuotePage />} />
    </Routes>
  </BrowserRouter>
);
export default App;
