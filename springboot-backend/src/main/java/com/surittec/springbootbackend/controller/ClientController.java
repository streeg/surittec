package com.surittec.springbootbackend.controller;

import java.util.List;

import com.surittec.springbootbackend.model.Client;
import com.surittec.springbootbackend.repository.ClientRepository;

import org.hibernate.annotations.Persister;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    //get all clients
    @GetMapping("/clients")
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    // create client
    @PostMapping("/clients")
    public Client createClient(@RequestBody Client client) {
        return clientRepository.save(client);
    }

    
}
