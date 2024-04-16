import axios from "axios";

// const baseUrl = "http://74.249.89.180:5555/api/"
// below code is used to get or replace the value using replace token method in azure devops pipeline
// const baseUrl = "#{backendurl}#";
  
  const baseUrl = process.env.REACT_APP_API_KEY;

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
