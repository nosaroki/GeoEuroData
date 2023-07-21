import React, {useState} from 'react'
import { createPortal } from 'react-dom'
import ModalContent from './ModalContent'

export default function ListCard({country}) {

const [showModal, setShowModal] = useState(false)

  return (
    // on entoure de fragment React pour ne pas alourdir le DOM
    <>
    <li onClick={() => setShowModal(!showModal)} className='relative cursor-pointer rounded transition-transform -duration-300 hover:-translate-y-1 will-change-transform'>
        <h2 className='absolute left-0 top-0 p-2 bg-gray-50 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] text-xl rounded'>{country.name.common}</h2>
        <img className='w-full h-full object-cover rounded' src={country.flags.svg} alt="country's flag" />
    </li>
    {/* Lorsque showModal est vrai, j'exécute la modal createPortal qui prend 2 arguments : ce qu'il faut afficher (<ModalContent/>) et où est-ce qu'il faut l'afficher (à la fin de document.body) */}
    {showModal && createPortal(<ModalContent country={country} closeModal={() => setShowModal(!showModal)}/>, document.body)} 
    </>
  )
}
