import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App bg-black flex flex-col h-screen">
      
        <Header />
            <main className="flex-grow container mx-auto px-4 text-teal-50 text-left my-2">
              Some teal text.
            </main>
        <Footer />
      
    </div>
  );
}

export default App;
