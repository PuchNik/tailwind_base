const PartTwo: React.FC = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-xl mt-10 after:content-['RED_Group'] after:block">
                Channel:
            </h1>
            <input
                type="text"
                placeholder="Enter email"
                className="outline-0 border border-solid border-white/50 transition-colors ease-in-out duration-300 focus:border-orange-400 mx-auto block mt-10 px-3 py-1.5 rounded placeholder:text-blue-200"
            />
            <button className="rounded bg-orange-500 duration-300 mt-10 mx-auto block px-2 border">
                Click me
            </button>
        </div>
    )
}

export default PartTwo
