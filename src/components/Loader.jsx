
export function Loader() {

    return (
        <div className="absolute flex justify-center items-center w-full h-20">
            <div>
                <div className=" w-fit h-20 flex gap-2 [&>*]:block [&>*]:w-7 [&>*]:h-7 [&>*]:bg-gray-900 [&>*]:rounded-full">
                    <span className="animate-bounce-loading"></span>
                    <span className="animate-bounce-loading-1"></span>
                    <span className="animate-bounce-loading-2"></span>
                </div>
            </div>
           
        </div>
    )
}