import { useCallback } from "react"
import Button from "./Button"
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
    body: React.ReactElement
    isOpen?: boolean
    onClose: () => void
    onSubmit: () => void
    title: string
    footer: React.ReactElement
    actionLabel: string
    disabled?: boolean
}

const Modal = ({ body, isOpen, onClose, onSubmit, title, footer, actionLabel, disabled }: Props) => {
    const handleClose = useCallback(() => {
        if (disabled) {
            return
        }

        onClose()
    }, [disabled, onClose])

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return
        }

        onSubmit()
    }, [disabled, onSubmit])

    if (!isOpen) {
        return null
    }

    return (
        <>
            <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70 ">

                <div className=" relative w-full  lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto ">

                    <div className=" w-full lg:h-auto border-0 rounded-lg shadow-lg relative  flex flex-col h-full  bg-black outline-none focus:outline-none">

                        <div className="flex items-center justify-between p-10 rounded-t text-center">
                            <h2 className="text-white text-center text-3xl">{title}</h2>
                            <button onClick={handleClose}>
                                <AiOutlineClose size={20} color='white' />
                            </button>
                        </div>
                        <div className="relative p-10 flex-auto">
                            {body}
                        </div>
                        <div className="p-10">
                            <Button
                                disabled={disabled}
                                label={actionLabel}
                                secondary
                                fullWidth
                                large
                                onClick={handleSubmit}
                            />
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal