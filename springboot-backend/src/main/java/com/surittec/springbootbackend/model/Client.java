package com.surittec.springbootbackend.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "clients")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "name")
    private String name;
    @Column(name = "cpf")
    private String cpf;

    @ElementCollection
    @OneToMany(targetEntity = Phone.class, cascade = {CascadeType.ALL})
    private List<Phone> phone = new ArrayList<Phone>();
    
    @Column(name = "email")
    private String email;

    @Column(name = "cep")
    private String cep;
    @Column(name = "logradouro")
    private String logradouro;
    @Column(name = "bairro")
    private String bairro;
    @Column(name = "cidade")
    private String cidade;
    @Column(name = "uf")
    private String uf;
    @Column(name = "complemento")
    private String complemento;

    public Client() {
    }

    public Client(String name, String cpf, ArrayList<Phone> phone, String email, String cep, String logradouro, String bairro, String cidade, String uf, String complemento) {
        super();
        this.name = name;
        this.cpf = cpf;
        this.cep = cep;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
        this.complemento = complemento;
        this.phone = phone;
        this.email = email;
    }
    
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public List<Phone> getPhone() {
        return phone;
    }

    public void setPhone(List<Phone> phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }
}
