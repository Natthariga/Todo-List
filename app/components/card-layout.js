
export default function CardLayout({ children, theme }) {
    return (
        <div className={`flex flex-col justify-start items-start p-10 
                w-full max-w-md md:w-2/4 backdrop-blur-md rounded-md shadow-lg mx-auto
                ${theme === 'light' ? 'bg-white/40' : 'bg-gray-700'}`}
        >
            {children}
        </div >
    )
}