import React from "react";

export const ComponentToPrint = React.forwardRef(({props}, ref) =>{
    return(
        <div ref={ref}>
            <div>
                {
                    props.map((items, index)=>(
                        <div key={index}>
                            <h1>{items.name}</h1>
                        </div>
                    ))
                }
            </div>

        </div>
    )
    
})