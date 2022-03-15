import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Resume from './components/Resume'


function App() {

  const pages = [
  {
    pageName: "portfolio",
    display: "Portfolio"
  },
  {
    pageName: "about",
    display: "About Me"
  },
  {
    pageName: "contact",
    display: "Contact"
  },
  {
    pageName: "resume",
    display: "Resume"
  },
]

  const [currentPage, setCurrentPage] = useState(pages[0])

  const clickLink = pageObject => setCurrentPage(pageObject)

  return (
    <div className="App bg-black flex flex-col h-screen">
        <Header currentPage={currentPage} pages={pages} clickLink={clickLink} />
            <main className="flex-grow container mx-auto px-4 text-teal-50 text-left my-2">
              { currentPage.pageName === 'portfolio' && <Portfolio /> }
              { currentPage.pageName === 'about' && <AboutMe /> }
              { currentPage.pageName === 'contact' && <Contact /> }
              { currentPage.pageName === 'resume' && <Resume /> }
            </main>
        <Footer />
      
    </div>
  );
}

export default App;
