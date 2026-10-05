import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import AllProjects from './components/pages/AllProjects';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div className="bg-black min-h-screen text-white w-full max-w-full overflow-x-hidden relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:m-2"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
