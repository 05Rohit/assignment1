import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Page404 from './components/404/Page404';
import BlogDetails from './components/Blog/BlogDetails';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Layout2 from './components/Layout/Layout2';
import NoteState from './ContextApi/NoteState';

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Render Home component with NoteState */}
          <Route index element={<NoteState><Home /></NoteState>} />
          
          {/* Route for displaying 404 page */}
          <Route path="*" element={<Page404 />} />
          
          {/* Route for blog details */}
          <Route path="blog/blog-details" element={<BlogDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
