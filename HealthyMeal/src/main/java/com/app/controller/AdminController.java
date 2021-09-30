package com.app.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDTO;
import com.app.pojos.Role;
import com.app.service.ICustomerService;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {

	// depnedency : service layer i/f
	@Autowired
	private ICustomerService customerService;

	public AdminController() {
		System.out.println("In admin controller" + getClass().getName());
	}

	// customer informataion
	@GetMapping(value = "/customer-list")
	public ResponseEntity<?> getAllCustomerDetails() {
		return new ResponseEntity<>(customerService.getAllCustomer(), HttpStatus.OK);
	}

	// user information by email
	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public ResponseEntity<?> getCustomerDetailsByemail(@RequestBody Map<String, Object> request) {
		String email = (String) request.get("email");
		System.out.println(email);
		System.out.println("Customer Details " + customerService.getCustomerDetailsByEmail(email));
		return new ResponseEntity<>(customerService.getCustomerDetailsByEmail(email), HttpStatus.OK);
	}

	// delete user

	@RequestMapping(value = "/delete-user", method = RequestMethod.POST)
	public ResponseEntity<?> deleteCustomersDetails(@RequestBody Map<String, Object> request) {
		String email = (String) request.get("email");
		System.out.println(email);
		return new ResponseEntity<>(
				customerService.deleteCustomerDetails(customerService.getCustomerDetailsByEmail(email)), HttpStatus.OK);
	}

	// add user
	@RequestMapping(value = "/add-user", method = RequestMethod.POST)
	public ResponseEntity<?> addUser(@RequestBody UserDTO userdto) {
		System.out.println(" add user " + userdto);
		return new ResponseEntity<>(customerService.addCustomer(userdto), HttpStatus.OK);
	}

	/*
	 * //find all Users By Role
	 * 
	 * @RequestMapping(value = "/show", method = RequestMethod.POST) public
	 * ResponseEntity<?> showUser(@RequestBody Map<Role, Object> request) { Role
	 * role = (Role) request.get(role); System.out.println(""); return new
	 * ResponseEntity<>(customerService.getAllUserByRole(role), HttpStatus.OK); }
	 */

	// find all Users By Role

	@RequestMapping(value = "/show/{role}", method = RequestMethod.GET)
	public ResponseEntity<?> showUser(@PathVariable Role role) {
		// String role = (String) request.get("role");
		System.out.println("Role :" + role);
		return new ResponseEntity<>(customerService.getAllUserByRole(role), HttpStatus.OK);
	}

}
