import axios from 'axios';

const ClientsUrl = 'http://localhost:8080/api/clients';

class ClientService {

    getClients(){
        return axios.get(ClientsUrl);
    }

    createClient(client){
        return axios.post(ClientsUrl, client);
    }
}

export default new ClientService();