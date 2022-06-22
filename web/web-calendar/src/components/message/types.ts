export interface MessageProps {
    text: string;
    callAction?: string;
    onClick?: () => void;
    withCallAction: boolean;
}