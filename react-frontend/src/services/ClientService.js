import axios from 'axios';

const ClientsUrl = 'http://localhost:8080/api/clients';

class ClientService {

    getClients(){
        return axios.get(ClientsUrl);
    }
}

export default new ClientService();