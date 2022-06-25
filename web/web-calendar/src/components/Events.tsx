import { PencilSimple, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { useErrorMessage } from "../hooks/useErrorMessage";
import { useSuccessMessage } from "../hooks/useSuccessMessage";
import { api } from "../lib/api";
import swal from 'sweetalert';
import EventForm from "./Home/EventForm";

interface EventsProps {
    updateEvent: (date: string) => void
}
interface GetEvents {
    id: number;
    title: string;
    date: string;
    initHour: string;
    endHour: string;
    description: string;
}


export default function Events(props: EventsProps) {
    const [data, setData] = useState<GetEvents[]>([])

    const actualDate = formatDate(new Date())

    function formatDate(date: Date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    useEffect(() => {
        api.get('/event/list').then(response => {
            setData(response.data.allEvents);
        })
    }, [])

    async function deleteEvent(eventId: number) {
        swal({
            title: "DELETAR EVENTO",
            text: "Tem certeza que deseja deletar o evento?",
            icon: "error",
            buttons: ['cancelar', 'confirmar'],
            dangerMode: true,
        }).then((value) => {
            if(value) {
                api.post('/event/delete', {
                    eventId: eventId,
                }).then(response => {
                    if(response.status === 201) {
                        const successMessage = useSuccessMessage('Evento deletado' , 1500)
                        return successMessage
                    }
                }).catch(error => {
                    if(error.response.status === 409) {
                        const errorMessage = useErrorMessage('Algo deu errado' , 1500)
                        return errorMessage
                    }
                })
            }
        })
    }

    function handleUpdateEvent(date: string) {
        props.updateEvent(date)
    }

    return (
        <div className="flex flex-1 bg-gray rounded-lg h-full p-8">
            <main className="w-full">
                <ul className="flex flex-col gap-4">
                    {data?.map(data => {
                        return (
                            <li key={data.id}>
                                <div className="flex gap-4 min-w-full items-center">
                                    <span className={`
                                        text-4xl text-yellow
                                        ${data.date < actualDate ? 'text-opacity-40' : ''}
                                    `}>
                                        {data.date.split('-')[2]}/{data.date.split('-')[1]}
                                    </span>
                                    <div className={`
                                        flex justify-between gap-8 items-center flex-1  rounded-lg px-4 py-2 bg-black
                                        ${data.date < actualDate ? 'bg-opacity-50' : ''}
                                    `}>
                                        <p className="w-3/4 overflow-hidden">
                                            {data.title} - {data.description}
                                        </p>
                                        <p>
                                            {data.initHour} - {data.endHour}
                                        </p>
                                        <div className={`
                                            flex gap-4
                                            ${data.date < actualDate ? 'hidden' : ''}
                                        `}>
                                            <PencilSimple 
                                                size={24} 
                                                className="text-warning cursor-pointer"
                                                onClick={() => handleUpdateEvent(data.date)}
                                            />
                                            <Trash size={24} 
                                                className="text-danger cursor-pointer"
                                                onClick={() => deleteEvent(data.id)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </div>
    )
}