const ModalWindow: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center">
            <div className="bg-white/80 text-black rounded w-1/2 p-5">
                <h1 className="text-xl font-semibold">Modal window</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                </p>
            </div>
        </div>
    )
}

export default ModalWindow
