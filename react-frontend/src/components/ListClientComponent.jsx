import React, { Component } from 'react';
import ClientService from '../services/ClientService';

class ListClientComponent extends Component {
    constructor(props) {
        super(props);


        this.state = { 
            clients: [],
         }
    }

    componentDidMount() {
        ClientService.getClients().then((res) => {
            this.setState({ clients: res.data})
            console.log(res.data)
        });
    }
    render() { 
        return (
            <div>
                <h2 className="text-center">List Client</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                            
                                <th>ID</th>
                                <th>Name</th>
                                <th>CPF</th>
                                <th>Address</th>
                                <th>Phones</th>
                                <th>Email</th>
                                 {/* add conditional rendering here */}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.clients.map((client) => 
                                    <tr key={client.id}>
                                        <td>{client.name}</td> 
                                        <td>{client.cpf}</td>
                                        <td>{client.email}</td> 
                                        <td>CEP: 
                                            {client.cep ? " " + client.cep + " ": '-\n'}
                                            {client.logradouro ? client.logradouro + " " : '-\n'} 
                                            {client.bairro ? " " + client.bairro + " " : '-\n'} 
                                            {client.cidade ? " " + client.cidade + "" : '-\n'} 
                                            {client.uf ? " - " + client.uf + " " : '-\n'}
                                        </td>
                                        <td>
                                        {client.phone.map((phone, index) => 
                                        <>
                                            {
                                                phone.number + " "
                                            }
                                        </>
                                        )}
                                        </td>
                                        <td>
                                            {client.email}
                                        </td>
                                        <td>
                                        </td>
                                    </tr>    
                                )
                                
                            }
                            

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
 
export default ListClientComponent;