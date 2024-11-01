"use server"

import axios from "axios"

export const fetchStudents = async()=>{
    try {
        
        const response = await axios.get('https://electrical-commission-inch-ko.trycloudflare.com/student')
        if(!response){
    
        }
        const data = response.data
    
        return data;
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
        } else {
            console.log(err);
        }
    }
}

export const fetchStudent = async (id:string)=>{
    try {

        const response = await axios.get(`https://electrical-commission-inch-ko.trycloudflare.com/student${id}`)
        if(response.status !== 200){
            throw new Error('Failed to fetch student')
        }
        const data = response.data

        return data
        
    } catch (err ) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error(err);
        }
    }
} 