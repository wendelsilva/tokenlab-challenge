import { Link } from "react-router-dom";
import { User, CalendarBlank, Bell   } from "phosphor-react";
import { useState } from "react";

export default function SideBar() {
    const [optionSelected, setOptionSelected] = useState('calendar')

    function changeSidebarOptionSelected(option: string) {
        setOptionSelected(option)
        return optionSelected
    }

    return (
        <aside className="flex flex-col self-start bg-gray w-[95px] h-full justify-center items-center">
            <ul className="flex flex-col gap-4 w-full items-center" >
                <li className={`
                        hover:bg-black w-full py-2
                        ${optionSelected === "calendar" ? 'bg-black rounded-l-lg rounded-bl-lg' : ''}
                    `}
                    
                    onClick={() => changeSidebarOptionSelected('calendar')}
                >
                    <Link to='#' className="flex justify-center">
                        <CalendarBlank size={32} className="text-yellow"/>
                    </Link>
                </li>

                <li className={`
                        hover:bg-black w-full py-2
                        ${optionSelected === "user" ? 'bg-black rounded-l-lg rounded-bl-lg' : ''}
                    `}
                    onClick={() => setOptionSelected('user')}
                >
                    <Link to='#' className="flex justify-center">
                        <User size={32} className="text-yellow"/>
                    </Link>
                </li>

                <li className={`
                        hover:bg-black w-full py-2
                        ${optionSelected === "notifications" ? 'bg-black rounded-l-lg rounded-bl-lg' : ''}
                    `}
                    onClick={() => setOptionSelected('notifications')}
                >
                    <Link to='#' className="flex justify-center">
                        <Bell size={32} className="text-yellow"/>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}