import React from "react";
const ProgressBar = () => {
    
    return (
        <div className="progress w-60 bg-gray-300 h-12">
            <div className="bar bg-blue-300 w-3/4 h-12 flex justify-center">
                <span className="text-white font-extrabold text-xl m-auto"> 
                    75%    
                </span>
            </div>
        </div>
    )
}

export default ProgressBar;