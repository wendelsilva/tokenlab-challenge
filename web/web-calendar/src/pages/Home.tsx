import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { format } from 'date-fns';

import SideBar from '../components/SideBar';
import Header from '../components/Header'
import EventForm from '../components/Home/EventForm';

import 'react-toastify/dist/ReactToastify.css';
import Events from '../components/Events';
import { api } from '../lib/api';

export default function Home() {
    const [showEventForm, setShowEventForm] = useState(false)

    function handleShowEventForm() {
        setShowEventForm(!showEventForm)
    }

    return (
        <div className='h-screen flex flex-col'>
            <Header showEvent={handleShowEventForm}/>
            <div className='flex h-screen'>
                <SideBar />
                <main className='flex gap-4 self-end h-full w-full justify-between items-center p-4'>
                    {showEventForm ? <EventForm showMe={handleShowEventForm} /> : ''}
                    <Events updateEvent={handleShowEventForm}/>
                </main>
            </div>
            <ToastContainer />
        </div>
    )
}