import { FormEvent, FormEventHandler } from "react";

export interface FormProps {
    children: any;
    onSubmit?: () => void
}