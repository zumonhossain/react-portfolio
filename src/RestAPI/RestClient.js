import axios from 'axios';

class RestClient{

    static GetRequest(getUrl){
        axios.get(getUrl).the(response=>{
            return response.data
        }).catch(error=>{
            return null;
        });
    }

}
export default RestClient