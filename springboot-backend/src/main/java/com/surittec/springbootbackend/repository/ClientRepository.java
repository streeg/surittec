package com.surittec.springbootbackend.repository;

import com.surittec.springbootbackend.model.Client;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository

public interface ClientRepository extends JpaRepository<Client, Long> {

    
}
