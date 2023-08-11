import http from "../http-common";

const getAll = () => {
    return http.get('/persons');
}

const FamilyService = {
    getAll
}

export default FamilyService