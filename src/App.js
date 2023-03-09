import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PhotosList } from './features/photos/PhotosList';
import { PhotoPage } from './features/photos/PhotoPage';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PhotosList/>} />
          <Route path="/photos/:photoId" element={<PhotoPage/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;