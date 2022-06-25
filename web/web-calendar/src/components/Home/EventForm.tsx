import { DownloadSimple, X } from "phosphor-react"
import { FormEvent, useState } from "react"
import swal from "sweetalert"
import { useErrorMessage } from "../../hooks/useErrorMessage"
import { useSuccessMessage } from "../../hooks/useSuccessMessage"
import { api } from "../../lib/api"

interface EventFormProps {
    showMe: () => void
}

export default function EventForm(props: EventFormProps) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [initHour, setInitHour] = useState('')
    const [endHour, setEndHour] = useState('')
    const [description, setDescription] = useState('')

    async function handleCreateEvent(event: FormEvent) {
        event?.preventDefault();

        if(title === '' || date === '' || initHour === '' || endHour === '' || description === '') {
            const nullInputs = useErrorMessage('Preencha todos os campos', 4000)
            return nullInputs;
        }

        await api.post('/event/create', {
            title: title,
            date: date,
            initHour: initHour,
            endHour: endHour,
            description: description,
        }).then(response => {
            if(response.status === 201) {
                const succesMessage = useSuccessMessage('Evento criado com sucesso', 1500)
                setTimeout(() => {
                    window.location.reload()
                }, 1500);
                return succesMessage;
            }
        }).catch((error) => {
            if(error.response.status === 409) {
                api.post('/event/listOne', {
                    date: date
                }).then((response) => {
                    if(response.status === 201) {
                        swal({
                            title: "EDITAR EVENTO",
                            text: "Um evento nesta data já existe. deseja atualizar o evento existente?",
                            icon: "warning",
                            buttons: ['cancelar', 'confirmar'],
                            dangerMode: true,
                        }).then((value) => {
                            if(value) {
                                api.post('/event/update', {
                                    title: title,
                                    date: date,
                                    initHour: initHour,
                                    endHour: endHour,
                                    description: description,
                                }).then(response => {
                                    if(response.status === 201) {
                                        const successMessage = useSuccessMessage('Evento atualizado' , 1500)
                                        return successMessage
                                    }
                                }).catch(error => {
                                    if(error.response.status === 409) {
                                        const errorMessage = useErrorMessage('Algo deu errado' , 1500)
                                        return errorMessage
                                    }
                                })
                            } else {
                                const duplicateEvent = useErrorMessage('Evento não pode ser criado pois já existe um evento neste dia e/ou horário', 4000)
                                setDate('')
                                return duplicateEvent
                            }
                        })
                    }
                })
            }
        })
    }

    return (
        <div className='bg-gray rounded-lg px-4 py-2 flex flex-col justify-center items-center gap-8'>
            <form className="max-w-[256px] flex flex-col items-center gap-2">
                <div className="flex flex-col gap-1">
                    <label>
                        Nome do evento
                    </label>
                    <input 
                        className="w-60 h-8 rounded-lg pl-2 text-gray" type="text" placeholder="Entrevista" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label>
                        Data
                    </label>
                    <input 
                        className="w-60 h-8 rounded-lg pl-2 text-gray" type="date" placeholder="dd/mm/yyyy" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                    <div className="flex flex-col gap-1">
                        <label>
                            Ínicio
                        </label>
                        <input 
                            className="w-60 h-8 rounded-lg pl-2 text-gray" 
                            type="time" 
                            placeholder="00:00h"
                            value={initHour} 
                            onChange={(e) => setInitHour(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>
                            Término
                        </label>
                        <input 
                            className="w-60 h-8 rounded-lg pl-2 text-gray" 
                            type="time" 
                            placeholder="00:00h"
                            value={endHour} 
                            onChange={(e) => setEndHour(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>
                            Descrição
                        </label>
                        <textarea 
                            className="w-60 h-8 rounded-lg pl-2 text-gray resize-y" 
                            rows={10} 
                            cols={30} 
                            placeholder="descrição do evento"
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                        />
                </div>
                <div className="flex flex-wrap gap-2 items-center justify-center mt-4">
                    <button 
                        type="submit" 
                        className="bg-success py-2 px-3 rounded-lg flex gap-1"
                        onClick={handleCreateEvent}
                    >
                        <DownloadSimple size={24}/>
                        salvar
                    </button>
                    <button
                        className="bg-danger py-2 px-3 rounded-lg flex gap-1"
                        onClick={props.showMe}
                    >
                        <X size={24}/>
                        cancelar
                    </button>
                </div>
            </form>
        </div>
    )
}