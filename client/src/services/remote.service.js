import http from "../http-common";

const getData = () => {
    console.log({http: http.getUri()})
    return http.get('/');
};

const DataService = {
    getData
}

export default DataService;