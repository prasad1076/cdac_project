package com.app.service;

import java.util.List;

import com.app.dto.AddressDTO;
import com.app.dto.UserDTO;
import com.app.pojos.Role;
import com.app.pojos.User;

public interface ICustomerService {
	// add a method for customer login
	User authenticateUser(String email, String password);

	// add a method for get all customer details
	List<User> getAllCustomer();

	// add a method to get customer details by role
	List<User> getAllUserByRole(Role role);
	// add method to get all customer details by email

	User getCustomerDetailsByEmail(String email);

	// methd for delete customer
	String deleteCustomerDetails(User user);

	// method for Sign-up of Customer
	String addCustomerDetails(UserDTO userDTO);

	// method for add customer
	String addCustomer(UserDTO userdto);

	User updateUserProfile(Integer userId, UserDTO userDTO);
	
	String addAddress(AddressDTO addressDTO,User selectedUser);

}
