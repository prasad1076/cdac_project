
package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.UserRepository;
import com.app.dto.AddressDTO;
import com.app.dto.LoginRequest;
import com.app.dto.UserDTO;
import com.app.pojos.User;
import com.app.service.ICustomerService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class UserContoller {
	// dependency : service layer i/f

	@Autowired
	private ICustomerService customerSevice;
	@Autowired
	private UserRepository userRepository;
//	@Autowired
//	private EmailService emailService;

	public UserContoller() {
		System.out.println("in UserController " + getClass().getName());

	}

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest request) {

		return new ResponseEntity<>(customerSevice.authenticateUser(request.getEmail(), request.getPassword()),
				HttpStatus.OK);// Actual view name : // /WEB-INF/views/user/login.jsp
	}

	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public ResponseEntity<?> customerSignup(@RequestBody UserDTO userDTO) {
		// user will signup
		System.out.println("in signup " + userDTO);
		// --
		/*
		 * String subject = "Welcome To PizzaHut" + " " + userDTO.getFirstName(); String
		 * message = "" + "<div style='border:1px solid #e2e2e2; padding:20px'>" +
		 * "<h1>" + "you have suscessfully registered to Agri Bazaar :" + "<br>" +
		 * "USERNAME = " + userDTO.getEmail() + "<br>" + "PASSWORD = " +
		 * userDTO.getPassword() + "</n>" + "<br>" + "Thank You !" + "</h1> " +
		 * "</div>"; String to = userDTO.getEmail();
		 * 
		 * boolean flag = this.emailService.sendEmail(subject, message, to);
		 */
		// --
		return new ResponseEntity<>(customerSevice.addCustomerDetails(userDTO), HttpStatus.OK);
	}

	/*
	 * public ResponseEntity<?> authenticateUser(@RequestBody Map<String, Object>
	 * req) { String email = (String) req.get("email"); String password = (String)
	 * req.get("password"); System.out.println(email); System.out.println(password);
	 * 
	 * return new ResponseEntity<>(customerSevice.authenticateUser(email,password),
	 * HttpStatus.OK) }
	 */

	@RequestMapping(value = "/add-address/{selectedUser}", method = RequestMethod.POST)
	public ResponseEntity<?> addAddress(@RequestBody AddressDTO addressDTO, @PathVariable User selectedUser) {

		System.out.println("in add address " + addressDTO);
		return new ResponseEntity<>(customerSevice.addAddress(addressDTO, selectedUser), HttpStatus.OK);
	}

}
