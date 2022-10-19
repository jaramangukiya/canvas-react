import './App.css';
import Layout from './assest/layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './assest/home';
import About from './assest/about';
import Contact from './assest/contact';
// import Footer from './assest/footer';

function App() {
  return (
    <>
      <Layout>
        {/* <About/> */}
        {/* <Home /> */}
        <Contact/>
      </Layout>
    </>
  );
}

export default App;
