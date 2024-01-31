import { SignInButton, SignOutButton, SignedIn, SignedOut } from '@clerk/clerk-react'
import './App.css'

function App() {
  

  return (
    <>

    <SignedOut>
    <SignInButton />
      Nirvana
    </SignedOut>
    <SignedIn>
      <SignOutButton afterSignOutUrl="/" />
      Conteúdo privado
    </SignedIn>
      
    </>
  )
}

export default App
