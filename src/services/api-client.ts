import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c1a678d730a747078a4871f5e537114b'
    }
})
