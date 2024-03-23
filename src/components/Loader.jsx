
export function Loader() {

    return (
        <div className="absolute bg-gray-200 flex justify-center items-center w-full h-full">
            <div>
                <div className="w-fit flex gap-2 [&>*]:block [&>*]:w-7 [&>*]:h-7 [&>*]:bg-gray-900 [&>*]:rounded-full">
                    <span className="animate-bounce-loading"></span>
                    <span className="animate-bounce-loading-1"></span>
                    <span className="animate-bounce-loading-2"></span>
                </div>
            </div>
           
        </div>
    )
}