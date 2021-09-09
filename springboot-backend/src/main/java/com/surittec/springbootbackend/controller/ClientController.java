package com.surittec.springbootbackend.controller;

import java.util.List;

import com.surittec.springbootbackend.model.Client;
import com.surittec.springbootbackend.repository.ClientRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    //get all employees
    @GetMapping("/clients")
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    } 

    
}
