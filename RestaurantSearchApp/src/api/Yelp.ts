import axios from "axios";

export default axios.create({
    baseURL : "https://api.yelp.com/v3",
    headers : {
        Authorization : "Bearer yBcmbujVRvD_2seqhYvrAF3neEQkp22ccz9dK-lRCzVP086fWqHI6pHkffqyQDo2pzZcapAvxTGVfG4Voq0HNkyobM1qKn1O2XhjVcG_qCVHJA9Deng9rvPOXNyTZXYx"
    }
})