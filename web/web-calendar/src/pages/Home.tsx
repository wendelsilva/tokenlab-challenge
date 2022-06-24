import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { format } from 'date-fns';

import SideBar from '../components/SideBar';
import Header from '../components/Header'
import EventForm from '../components/Home/EventForm';
import Calendar from 'react-calendar';

import 'react-toastify/dist/ReactToastify.css';
import 'react-calendar/dist/Calendar.css';


export default function Home() {
    const [date, setDate] = useState(new Date())

    function cliquei() {
        alert(format(date, 'dd/MM/yyyy'))
    }

    return (
        <div className='h-screen flex flex-col'>
            <Header />
            <div className='flex h-screen'>
                <SideBar />
                <main className='flex gap-4 self-end h-full w-full justify-between items-center p-4'>
                    <EventForm />
                    {/* {props.optionSelected === 'calendar' ? 'calendario' : 'outra coisa'} */}
                </main>
            </div>
            <ToastContainer />
        </div>
    )
}