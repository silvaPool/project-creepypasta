import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import './App.css'
import PrimarySearchAppBar from './components/Header'
import Title from './components/Title'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LayoutLogin from './components/LayoutLogin'

function App() {
  

  return (
    <>

    <SignedOut>
     <LayoutLogin />
    </SignedOut>
    <SignedIn>
    {/* <UserButton /> */}
      {/* <SignOutButton afterSignOutUrl="/" /> */}
      <PrimarySearchAppBar />
      <Title />
      <Cards />
     <Footer />
    </SignedIn>

  

  

 
      
    </>
  )
}

export default App
