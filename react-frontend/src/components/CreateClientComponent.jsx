import React, { Component } from 'react';
import ClientService from '../services/ClientService';


class CreateClientComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            cpf: '',
            email: '',
            cep: '',
            logradouro: '',
            bairro: '',
            cidade: '',
            uf: '',
            complemento: '',
            phone: '',
         }
         this.changeName = this.changeName.bind(this);
         this.changeCpf = this.changeCpf.bind(this);
         this.changeEmail = this.changeEmail.bind(this);
         this.changeCep = this.changeCep.bind(this);
         this.changeLogradouro = this.changeLogradouro.bind(this);
         this.changeBairro = this.changeBairro.bind(this);
         this.changeCidade = this.changeCidade.bind(this);
         this.changeUf = this.changeUf.bind(this);
         this.changeComplemento = this.changeComplemento.bind(this);
         this.changePhone = this.changePhone.bind(this);
    }

    saveClient = (e) => {
        e.preventDefault();
        let client = {name: this.state.name, cpf: this.state.cpf, email: this.state.email, cep: this.state.cep, logradouro: this.state.logradouro,
            bairro: this.state.bairro, cidade: this.state.cidade, uf: this.state.uf, complemento: this.state.complemento, phone: this.state.phone};
            console.log('Client => ' + JSON.stringify(client));
            ClientService.createClient(client).then(res => {
                this.props.history.push('/client');
    });
}

    cancel(){
        this.props.history.push('/client')
    }

    changeName = (event) => {
        this.setState({name: event.target.value});
    }

    changeCpf = (event) => {
        this.setState({cpf: event.target.value});
    }

    changeEmail = (event) => {
        this.setState({email: event.target.value});
    }

    changeCep = (event) => {
        this.setState({cep: event.target.value});
    }

    changeLogradouro = (event) => {
        this.setState({logradouro: event.target.value});
    }

    changeBairro = (event) => {
        this.setState({bairro: event.target.value});
    }

    changeCidade = (event) => {
        this.setState({cidade: event.target.value});
    }

    changeUf = (event) => {
        this.setState({uf: event.target.value});
    }

    changeComplemento = (event) => {
        this.setState({complemento: event.target.value});
    }

    changePhone = (event) => {
        this.setState({phone: event.target.value});
    }


    render() { 
        return ( 
            <div>
                <div className= "container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Client</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input placeholder="Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeName} />
                                        <label>Cpf</label>
                                        <input placeholder="Cpf" name="cpf" className="form-control"
                                            value={this.state.cpf} onChange={this.changeCpf} />
                                        <label>Email</label>    
                                        <input placeholder="Email" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmail} />
                                        <label>Cep</label>
                                        <input placeholder="Cep" name="cep" className="form-control"
                                            value={this.state.cep} onChange={this.changeCep} />
                                        <label>Logradouro</label>
                                        <input placeholder="Logradouro" name="logradouro" className="form-control"
                                            value={this.state.logradouro} onChange={this.changeLogradouro} />
                                        <label>Bairro</label>
                                        <input placeholder="Bairro" name="bairro" className="form-control"
                                            value={this.state.bairro} onChange={this.changeBairro} />
                                        <label>Cidade</label>
                                        <input placeholder="Cidade" name="cidade" className="form-control"
                                            value={this.state.cidade} onChange={this.changeCidade} />
                                        <label>Uf</label>
                                        <input placeholder="UF" name="uf" className="form-control"
                                            value={this.state.uf} onChange={this.changeUf} />
                                        <label>Complemento</label>
                                        <input placeholder="Complemento" name="complemento" className="form-control"
                                            value={this.state.complemento} onChange={this.changeComplemento} />
                                        <label>Phones</label>
                                        <input placeholder="Phones" name="phone" className="form-control"
                                            value={this.state.phone} onChange={this.changePhone} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveClient}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default CreateClientComponent;