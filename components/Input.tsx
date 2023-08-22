interface Props {
    placeholder?: string
    type?: string
    value?: string
    disabled?: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ placeholder, type, value, disabled, onChange }: Props) => {
    return (
        <div className="space-y-3">
            <input
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                type={type}
                className=" w-full
            p-4 
            text-lg 
            bg-black 
            border-2
            border-neutral-800 
            rounded-md
            outline-none
            text-white
            focus:border-sky-500
            focus:border-2
            transition
            disabled:bg-neutral-900
            disabled:opacity-70
            disabled:cursor-not-allowed"
                disabled={disabled} />
        </div>

    )
}

export default Input