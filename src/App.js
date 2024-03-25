import Header from './component/Header';
import Loader from './component/Loader';
import Slide from './component/Slide';
import Portfolio from './component/Portfolio';
import Footer from './component/Footer';
import './style/style.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Top from './component/Top';

function App() {
  return (
    <>
      <Loader />
      <Header />
      <Slide />
      <Portfolio />
      {/* <Footer /> */}
      <Top />
    </>
  );
}

export default App;
