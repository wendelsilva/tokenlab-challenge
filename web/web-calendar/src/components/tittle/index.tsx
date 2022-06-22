import { TitleProps } from "./types"

export default function Title({ title }: TitleProps) {
    return (
        <h1 className="text-4xl">{title}</h1>
    )
}