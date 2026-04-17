import React, { createContext, useState } from 'react';
export const DataContext = createContext();
const DataProvider = ({children}) => {

    const [processData,setProcessData] = useState([]);

    const handleInteraction=(Friend,Interection)=>{
const today = new Date().toISOString().split("T")[0];
       

        let UpdateIntereaction = {...Friend,'Intereaction':Interection,'IntereactionDate':today}

        const newUpdateFriend = [...processData,UpdateIntereaction];

        setProcessData(newUpdateFriend);
        

    }



    const data = {
        handleInteraction,
        processData
    }

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>
};

export default DataProvider;