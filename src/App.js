import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'

function App() {
    return (
        <div className="main-layout-grid">
            <header className="header">
                <Header />
            </header>

            <div className="content">
                <Home />
            </div>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}

export default App
