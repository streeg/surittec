package com.surittec.springbootbackend.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
    @Column(name = "Address")
    private List<Address> address = new ArrayList<Address>();
    @ElementCollection
    @Column(name = "phones")
    private List<Phone> phone = new ArrayList<Phone>();
    @Column(name = "email")
    private String email;

    public Client() {
    }

    public Client(String name, String cpf, List<Address> address, ArrayList<Phone> phone, String email) {
        super();
        this.name = name;
        this.cpf = cpf;
        this.address = address;
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

    public List<Address> getAddress() {
        return address;
    }

    public void setAddress(List<Address> address) {
        this.address.addAll(address);
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
}
