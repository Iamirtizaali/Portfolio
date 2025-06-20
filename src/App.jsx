import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { darkTheme, lightTheme } from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Timeline from './pages/Timeline';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
       <CssBaseline />
       <Router>
         <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
            {<Route path="/skills" element={<Skills />} />}
           <Route path="/projects" element={<Projects />} />
           <Route path="/services" element={<Services />} />
           <Route path="/timeline" element={<Timeline />} />
           <Route path="/blog" element={<Blog />} />
           <Route path="/contact" element={<Contact />} />
         </Routes>
       </Router>
     </ThemeProvider>
  );
}

export default App; 