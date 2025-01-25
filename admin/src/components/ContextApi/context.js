import React,{createContext,Fragment,useState} from "react";
import axios from "axios";

export const Datacontext=createContext()


export const Dataprovider=({children})=>{

    const [data,setData]=useState([])
    const [error,setError]=useState('')
    const [notif,setNotif]=useState('')
   
    const fetchData=async()=>{
        try {
            const response = await axios.get("http://localhost:3006/gethotels"); 
            setData(response.data.data); 
            setError('')
          } catch (err) {
            console.error(err);
            setError("Failed to fetch hotel data."); 
          }
    }

    const postData = async (formaData) => {
        try {
          const response = await axios.post("http://localhost:3006/addhotelsinfo", formaData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        
        } catch (err) {
          console.error(err);
          setError("Failed to post hotel data."); 
        }
      };

      const editData = async (newData) => {
        try {
       
          const response = await axios.post("http://localhost:3006/editdata", newData, {
            headers: {
              'Content-Type': 'multipart/form-data', 
            },
          });
      
          if (response.status ===200) {
          
            setNotif(response.data.message || 'Data updated successfully!');
          } else {
         
            setError('Failed to update data. Please try again.');
          }
        } catch (e) {
          
          console.error('Error while updating data:', e);
          setError('Something went wrong. Please try again!');
        }
      };
      

      const deleteData=async(id)=>{
        try{
            const response= await axios.delete(`http://localhost:3006/deleteData/${id}`)
            if(response.status===200)
            {
                setNotif(response.message)
                fetchData()
            }
        }catch(e)
        {
            setError('Try Again')
        }
      }

     
      
    return(
        <>
        <Datacontext.Provider value={{data,error,notif,fetchData,editData,deleteData,postData}}>
            {children}
        </Datacontext.Provider>
        </>
    )

}