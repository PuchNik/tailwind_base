const PartOne: React.FC = () => {
    return (
        <div className="container mx-auto relative">
            <h1 className="text-6xl font-bold text-orange-400 text-center mt-15">
                Tailwind
            </h1>
            <button
                className="rounded-3xl bg-amber-600 hover:bg-amber-400
             transition-colors mx-auto block mt-10 px-2 animate-bounce"
            >
                Button
            </button>

            <br />

            {/* Flex */}
            <div className="flex justify-between">
                <div className="bg-blue-500 w-20 h-20"></div>
                <div className="bg-blue-500 w-20 h-20"></div>
                <div className="bg-blue-500 w-20 h-20"></div>
            </div>

            <br />
            <br />

            {/* Grid */}
            <div className="grid grid-cols-3 gap-5">
                <div className="bg-blue-500 h-20"></div>
                <div className="bg-blue-500 h-20"></div>
                <div className="bg-blue-500 h-20"></div>
            </div>

            <br />
            <br />
        </div>
    )
}

export default PartOne
