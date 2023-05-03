import { useReducer } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// Component
import Header from './components/Header'
import ContactForm from './components/ContactForm'

// Reducer
import { contactsReducer,State } from './reducer/contactsReducer'

const intialState: State ={
  contacts: []
}

function App() {
  const [state, dispatch] = useReducer(contactsReducer,intialState)

  console.log('state',state);
  

  return (
    <div className='container mt-4'>
      <Header/>
      <ContactForm dispatch={dispatch}/>
    </div>
  )
}

export default App
