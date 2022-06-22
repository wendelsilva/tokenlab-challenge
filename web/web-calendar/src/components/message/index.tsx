import { MessageProps } from "./types"

export default function Message({ text, callAction, onClick, withCallAction }: MessageProps) {
    return (
        <>
            {withCallAction ? (
                <span><a className="text-yellow underline cursor-pointer" onClick={onClick}>{callAction}</a> {text}</span>
            ) : (
                <span>{text}</span>
            )}
        
        </>
    )
}