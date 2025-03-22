import React from "react";

export default function userLayout({childern} : {childern : React.ReactNode }){
    return(
        <div className="flex flex-col">
            {childern}
        </div>
    )
}