import React from "react";
const ProgressBar = () => {
    
    return (
        <div className="progress flex justify-center mb-2 mt-4">
            <div className="flex flex-col z-10">
                <span className="bar rounded-full h-10 w-10 flex items-center justify-center bg-blue-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                </span>
                <span>Order received</span>
            </div>
            <div className="flex flex-col w-96 -ml-16 -mr-4 -mt-3 z-0">
                <span className="mx-auto">On the way</span>     
                <span className="w-auto h-4 bg-gray-200"></span>
            </div>
            <div className="flex flex-col z-10">
                <span className="bar rounded-full h-10 w-10 flex items-center justify-center bg-gray-300 text-white"></span>
                <span className="w-20">Delivered</span>
            </div>
        </div>
    )
}

export default ProgressBar;