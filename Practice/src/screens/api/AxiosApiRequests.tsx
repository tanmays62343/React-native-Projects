import axios from "axios"

export const axiosApiGetRequest = async () => {
    const response = await axios({
        method : "GET",
        url : 'https://jsonplaceholder.typicode.com/posts/1'
    })
    return response
}

export const axiosApiPostRequest = async (url : string, data : any) => {
    const response = await axios({
        method : "POST",
        url : url,
        data : data
    })
    return response
}

export const axiosApiPutRequest = async (id : number, data : any) => {
    const response = await axios({
        method : "POST",
        url : 'https://jsonplaceholder.typicode.com/posts/'+id,
        data : data
    })
    return response
}