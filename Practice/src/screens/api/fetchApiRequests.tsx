

export const fetchApiGetRequest = async () => {
    const response = await fetch("https://reactnative.dev/movies.json")
    const responseJSON = response.json()
    return responseJSON
}

interface postRequestData {
    title: string,
    body: string,
    userId: number
}

export const fetchApiPostRequest = async (data: postRequestData) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const responseJSON = response.json()
    return responseJSON
}

// In PUT we have to send all the keys compulsory
// Weather we have to change the value of single key   
// The put function will overwrite the value of current Object
export const fetchApiPutRequest = async (id: number, data: postRequestData) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts" + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const responseJSON = response.json()
    return responseJSON
}

// In PATCH we don't have to send all the keys and values to change them
// We can send a single key-value pair which we have to change 
export const fetchApiPatchRequest = async (id: number, data: postRequestData) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts" + id, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const responseJSON = response.json()
    return responseJSON
}