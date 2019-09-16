package com.finalproject.application.Repository;

import com.finalproject.application.Model.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<Customer,Integer> {

}
