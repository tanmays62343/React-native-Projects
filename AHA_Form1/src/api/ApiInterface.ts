import axios from "axios";

export const PostApiNoHeaders = async(url : string, data : any) => {
    const response = await axios({
        method : "POST",
        url : url,
        data : data
    })
    return response
}
