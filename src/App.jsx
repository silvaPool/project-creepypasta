import { SignInButton, SignOutButton, SignedIn, SignedOut } from '@clerk/clerk-react'
import './App.css'
import PrimarySearchAppBar from './components/Header'
import Title from './components/Title'
import Cards from './components/Cards'

function App() {
  

  return (
    <>

    {/* <SignedOut>
    <SignInButton />
      Nirvana
    </SignedOut>
    <SignedIn>
      <SignOutButton afterSignOutUrl="/" />
      Conteúdo privado
    </SignedIn> */}

  <PrimarySearchAppBar />

  <Title />

  <Cards />
      
    </>
  )
}

export default App
