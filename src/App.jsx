import { SignInButton, SignOutButton, SignedIn, SignedOut } from '@clerk/clerk-react'
import './App.css'
import PrimarySearchAppBar from './components/Header'

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
      
    </>
  )
}

export default App
