import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from '../components/SideBar';
import Header from '../components/Header'
import MonthMenu from '../components/MonthMenu';
import EventForm from '../components/Home/EventForm';


export default function Home() {
    return (
        <div className='h-screen flex flex-col'>
            <Header />
            <div className='flex h-screen'>
                <SideBar />
                <main className='flex self-end h-full w-full justify-between items-center p-4'>
                    <MonthMenu />
                    <EventForm />
                    {/* {props.optionSelected === 'calendar' ? 'calendario' : 'outra coisa'} */}
                </main>
            </div>
            <ToastContainer />
        </div>
    )
}