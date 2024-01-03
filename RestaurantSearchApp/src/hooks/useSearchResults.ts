import yelp from "../api/Yelp";
import React, { useState, useEffect } from "react";

interface Businesses{
    name : string
    price : string
    id : string
    image_url : string
}

const useSearchResults = () : [Function,Businesses[],string] => {

    useEffect(() => {
        searchApi("Pasta")
    }, [])

    const [response, setResponse] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    const searchApi = async (searchTerm: string) => {
        try {
            const result = await yelp.get("/businesses/search",
                {
                    params: {
                        limit: 50,
                        term: searchTerm,
                        location: "san jose"
                    }
                })
            setResponse(result.data.businesses)
        }
        catch (error) {
            setErrorMessage("Something went wrong")
        }
    }
    return [searchApi, response, errorMessage]
}

export default useSearchResults
