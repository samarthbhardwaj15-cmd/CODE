import React, { Children, createContent } from 'react'
export const DataContext = createContext()
const UserContext = ({ Children }) => {
    const userData = {
        username:"Sarthak sharma",
        age:69,
        city:"Bhopal"
    }
    return (
        <div>
           <DataContext.Provider value={userData}>
               {Children}
           </DataContext.Provider>
        </div>
    )
}
export default UserContext
