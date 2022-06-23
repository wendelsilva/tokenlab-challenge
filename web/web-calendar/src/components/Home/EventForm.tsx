import { PencilSimple, Trash, DownloadSimple } from "phosphor-react"

export default function EventForm() {
    const edit = <PencilSimple />

    return (
        <div className='bg-gray rounded-lg px-4 py-2 flex flex-col justify-center items-center gap-8'>
            <span className="text-2xl">Abril 20, 2022</span>
            <form className="max-w-[256px] flex flex-col items-center gap-2">
                <div className="input-field">
                    <label>Ínicio</label>
                    <input className="w-60 h-8 rounded-lg pl-2 text-gray" type="text" placeholder="00:00h"/>
                </div>
                <div className="input-field">
                    <label>Término</label>
                    <input className="w-60 h-8 rounded-lg pl-2 text-gray" type="text" placeholder="00:00h"/>
                </div>
                <div className="input-field">
                    <label>Descrição</label>
                    <textarea className="w-60 h-8 rounded-lg pl-2 text-gray resize-y" rows={10} cols={30} placeholder="descrição do evento"/>
                </div>
                <div className="flex flex-wrap gap-2 items-center justify-center mt-4">
                    <button type="submit" className="bg-success py-2 px-3 rounded-lg flex gap-1">
                        <DownloadSimple size={24}/>
                        salvar
                    </button>
                    <button type="submit" className="bg-warning py-2 px-3 rounded-lg flex gap-1">
                        <PencilSimple size={24}/>
                        editar
                    </button>
                    <button type="submit" className="bg-danger py-2 px-3 rounded-lg flex gap-1">
                        <Trash size={24}/>
                        remover
                    </button>
                </div>
            </form>
        </div>
    )
}