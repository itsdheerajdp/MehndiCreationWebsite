import axios from "axios";
const instance=axios.create({
    baseURL:"https://sonamcreationbackend.up.railway.app/"
})
export default instance