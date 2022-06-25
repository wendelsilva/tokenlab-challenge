import { PencilSimple, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { useErrorMessage } from "../hooks/useErrorMessage";
import { useSuccessMessage } from "../hooks/useSuccessMessage";
import { api } from "../lib/api";

interface GetEvents {
    allEvents: {
        id: number;
        title: string;
        date: string;
        initHour: string;
        endHour: string;
        description: string;
    }[]
}


export default function Events() {
    const [data, setData] = useState<GetEvents>()

    function formatDate() {
        let date = new Date(),
            month = '' + (date.getMonth() + 1),
            day = '' + date.getDate(),
            year = date.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    const actualDate = formatDate.toString()

    useEffect(() => {
        api.get('/event/list').then(response => {
            setData(response.data);
        })
    }, [data])

    async function deleteEvent(eventId: number) {
        await api.post('/event/delete', {
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

    return (
        <div className="flex flex-1 bg-gray rounded-lg h-full p-8">
            <main className="w-full">
                <ul className="flex flex-col gap-4">
                    {data?.allEvents.map(data => {
                        return (
                            <li>
                                <div className="flex gap-4 min-w-full items-center">
                                    <span className="text-4xl text-yellow">
                                        {data.date.split('-')[2]}/{data.date.split('-')[1]}
                                    </span>
                                    <div className={`
                                        flex justify-between gap-8 items-center flex-1 bg-black rounded-lg px-4 py-2
                                        ${data.date > actualDate ? 'bg-opacity-75' : ''}
                                    `}>
                                        <p className="w-3/4 overflow-hidden">
                                            {data.title} - {data.description}
                                        </p>
                                        <p>
                                            {data.initHour} - {data.endHour}
                                        </p>
                                        <div className="flex gap-4">
                                            <PencilSimple 
                                                size={24} 
                                                className="text-warning cursor-pointer"
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