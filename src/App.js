import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Overview from './components/Overview';
import RecentTransactions from './components/RecentTransactions';
import AddTransaction from './components/AddTransaction';
import SpendingChart from './components/SpendingChart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/recent-transactions" element={<RecentTransactions />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
        <Route path="/spending-chart" element={<SpendingChart />} />
      </Routes>
    </Router>
  );
}

export default App;
