import Footer from './components/Footer.jsx'
import { useState } from 'react'

export default function App() {
    const [currentPage, setPage] = useState('Default Page')

    return(
        <Footer setPage={setPage}/>
    )
}


