import { Plus } from 'phosphor-react'
import Logo from './Logo'

interface HeaderProps {
    showEvent: () => void;
}

export default function Header(props: HeaderProps) {
    return (
        <header className='border-b-4 border-gray flex justify-between items-end w-screen py-6 pr-20 pl-4'>
            <Logo className='w-10 h-10'/>
            <button 
                className="bg-gray py-2 px-3 flex items-center gap-1 rounded-lg hover:bg-opacity-75"
                onClick={props.showEvent}
            >
               <Plus size={32} className="text-yellow" />
                Novo Evento
            </button>
        </header>
    )
}