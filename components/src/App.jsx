import './App.css'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import About from './components/About'
import Cards from './components/Cards'
import Contact from './components/Contact'
import Content from './components/Content'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import { Registration } from './components/Registration'
import SignUp from './components/SignUp'

function App() {
  

  return (
    <div>
      <Header/>

      {/* <Cards
        data= "Tailwind CSS is the only framework that Ive seen scale on large teams. Its easy to customize, adapts to any design,and the build size is tiny"
        user="Sarah Dayan"
        position="Staff Engineer, Algolia"
        img="https://images.pexels.com/photos/22885477/pexels-photo-22885477/free-photo-of-a-woman-sitting-on-a-bench-in-the-woods.jpeg"
      />
      <Cards
      data="This is Gaurav Negi a student who is currently working on react js for a hacathon in srhu dheradun.This is a practice card for it to check its resusability"
      use="Gaurav Negi"
      position="Student , GBPIET"
      img="https://images.pexels.com/photos/1466845/pexels-photo-1466845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      /> */}

      <About/>

      <Home/>

      <Content/>

      <Cards
      data="This is Gaurav Negi a student who is currently working on react js for a hacathon in srhu dheradun.This is a practice card for it to check its resusability"
      use="Gaurav Negi"
      position="Student , GBPIET"
      img="https://images.pexels.com/photos/1466845/pexels-photo-1466845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <Contact/>

      <SignUp/>

      <LoginPage/>

      <Registration/>

      <Footer/>

    </div>
    // <loginPage/>
  )
}

export default App