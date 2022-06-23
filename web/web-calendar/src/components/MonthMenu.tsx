import { CaretLeft, CaretRight } from 'phosphor-react'

export default function MonthMenu() {
    return (
        <div className='bg-gray rounded-lg px-4 py-2 flex flex-col gap-8'>
            <div className='flex items-center gap-8'>
                <button>
                    <CaretLeft size={32} className="text-yellow"/>
                </button>
                <span className='text-2xl'>2022</span>
                <button>
                    <CaretRight size={32} className="text-yellow"/>
                </button>
            </div>
            <ul className='flex flex-col gap-2'>
                <li>
                    janeiro
                </li>
                <li>
                    fevereiro
                </li>
                <li>
                    março
                </li>
                <li>
                    abril
                </li>
                <li>
                    maio
                </li>
                <li>
                    junho
                </li>
                <li>
                    julho
                </li>
                <li>
                    agosto
                </li>
                <li>
                    setembro
                </li>
                <li>
                    outubro
                </li>
                <li>
                    novembro
                </li>
                <li>
                    dezembro
                </li>
            </ul>
        </div>
    )
}