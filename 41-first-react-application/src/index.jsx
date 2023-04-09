import './style.css'
import { createRoot } from 'react-dom/client'
import App from '/App'

const root = createRoot(document.querySelector('#root'))

root.render(
    <>
        <App clickersCount={4} children={ <h1> My Application </h1> }/>
    </>
)