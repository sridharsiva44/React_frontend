import axios from "axios";

//const baseUrl = "http://74.249.89.180:5555/api/"

 const baseUrl = process.env.Dot_Net_back_end_Url;


export default {

    dCandidate(url = baseUrl + 'dcandidate/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}
