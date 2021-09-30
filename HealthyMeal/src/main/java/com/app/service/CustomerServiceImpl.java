package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AddressRepository;
import com.app.dao.ProductRepository;
import com.app.dao.UserRepository;
import com.app.dto.AddressDTO;
import com.app.dto.UserDTO;
import com.app.pojos.Address;
import com.app.pojos.Role;
import com.app.pojos.User;

@Service
@Transactional
public class CustomerServiceImpl implements ICustomerService {
	// dependency : Dao layer i/f
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private AddressRepository addressRepository;

	@Override
	public List<User> getAllCustomer() {

		return userRepository.findAll();
	}

	@Override

	public User authenticateUser(String email, String password) {
		return userRepository.findByEmailAndPassword(email, password);
	}

	@Override
	public User getCustomerDetailsByEmail(String email) {

		return userRepository.findByEmail(email);
	}

	@Override
	public String deleteCustomerDetails(User user) {
		if (user != null) {
			userRepository.delete(user);

			return "Customer deleted successfully !!";
		} else
			return "No customer found!";
	}

	@Override
	public String addCustomerDetails(UserDTO userDTO) {
		if (userDTO != null) {
			User user = new User();
			BeanUtils.copyProperties(userDTO, user);
			System.out.println("userDTO : " + userDTO);
			System.out.println("user : " + user);
			// set role of user
			user.setRole(Role.CUSTOMER);
			System.out.println("user : " + user);
			System.out.println("User added: " + userRepository.save(user));
			return "User Added successfully!";
		} else
			return "User Addition failed!";

	}

	public String addCustomer(UserDTO userdto) {
		User user = new User();
		BeanUtils.copyProperties(userdto, user);
		if (userdto != null) {
			if (user.getRole().equals(Role.EMPLOYEE)) {
				user.setRole(Role.EMPLOYEE);
				System.out.println("user" + user);
				System.out.println("Employee added " + userRepository.save(user));
				return "Employee Added Successfully !!";
			} else {
				user.setRole(Role.DELIVERY_BOY);
				System.out.println("user" + user);
				System.out.println("Delivery Boy added " + userRepository.save(user));
				return "Delivery Boy  Added Successfully !!";
			}

		}
		return "User Addition Failed...!!!";
	}

	@Override
	public List<User> getAllUserByRole(Role role) {
		// List<User> user = new ArrayList<>(); // null
		// System.out.println("User : " + user.getRole());
		System.out.println("Role " + role);
		// if (role.equals(Role.EMPLOYEE))
		// return userRepository.findByRole(role);
		// else if (role.equals(Role.DELIVERY_BOY))
		// return userRepository.findByRole(role);
		return userRepository.findByRole(role);
	}

	@Override
	public User updateUserProfile(Integer userId, UserDTO userDTO) {
		User userDetails = userRepository.findById(userId).get();
		BeanUtils.copyProperties(userDTO, userDetails, "email", "firstName", "lastName", "role");
		return userDetails;
	}

	@Override
	public String addAddress(AddressDTO addressDTO,User selectedUser) {
		Address address=new Address();
		if (addressDTO != null) {
			
			BeanUtils.copyProperties(addressDTO, address);
			System.out.println("userDTO : " + addressDTO);
			System.out.println("user : " + address);
			// set role of user
			//User selectedUser=address.getSelectedUser();
			address.setSelectedUser(selectedUser);
			
			System.out.println("Address added: " + addressRepository.save(address));
			return "Address Added successfully!";
		} else
			return "User Addition failed!";

	}

}
