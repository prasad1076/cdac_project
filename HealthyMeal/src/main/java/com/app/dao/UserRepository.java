package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Address;
import com.app.pojos.Order;
import com.app.pojos.Role;
import com.app.pojos.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	// add a method to find customer by customer

	//@Query("select u from User u where u.email =:email and u.password =:password")
	//User validateUser(@Param("email") String email, @Param("password") String password);
	
	User findByEmailAndPassword(String email, String password);
	
	// @Query("select u from User u where u.email= :email")
	// public User findByEmail( @Param("email") String email);
	public User findByEmail(String email);

	//@Query("select u from User u where u.role =:role")
	//List<User> findByRole(@Param("role") Role role);
	List<User> findByRole(Role role);
	
	User deleteByEmail(String email);
}
