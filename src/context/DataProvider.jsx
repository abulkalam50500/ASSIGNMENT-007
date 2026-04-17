import React, { createContext, useState } from 'react';
export const DataContext = createContext();
const DataProvider = ({children}) => {

    const [processData,setProcessData] = useState([]);

    const handleInteraction=(Friend,Interection)=>{

       

        let UpdateIntereaction = {...Friend,'Intereaction':Interection}

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