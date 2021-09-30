package com.app.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDTO;
import com.app.service.ICustomerService;
import com.app.service.IOrderService;


@RestController
@CrossOrigin
@RequestMapping("/employee/home")
public class EmployeeController {

	// depnedency : service layer i/f
	@Autowired
	private IOrderService orderService;

	@Autowired
	private ICustomerService cutsomerService;

	public EmployeeController() {
		System.out.println("In Employee controller" + getClass().getName());
	}

	// customer informataion
	@GetMapping(value = "/order-list")
	public ResponseEntity<?> getAllOrdersList() {
		return new ResponseEntity<>(orderService.getAllOrders(), HttpStatus.OK);
	}

	
	// need to modify order list by date
	/*
	 * @GetMapping(value = "/order-list-by-date") public ResponseEntity<?>
	 * getAllOrdersByDate(@RequestBody LocalDate issuedOn) { return new
	 * ResponseEntity<>(orderService.findByStartDateAfter(issuedOn), HttpStatus.OK);
	 * }
	 */

	@RequestMapping(value = "/order-list-by-date")
	public ResponseEntity<?> getAllOrdersByDate() {
		return new ResponseEntity<>(orderService.findPresentOrder(LocalDateTime.now()), HttpStatus.OK);
	}

	

	@PutMapping(value = "/order-chnage-status/{id}")
	public ResponseEntity<?> changeOrderStatus(@PathVariable(value = "id") Integer orderId) {
		return new ResponseEntity<>(orderService.changeOrderStatus(orderId), HttpStatus.OK);
	}

	/*
	 * @RequestMapping(value = "/order-chnage-status/{id}", method =
	 * RequestMethod.PUT) public ResponseEntity<?> changeOrderStatus(@RequestBody
	 * Map<Integer, String> request){ Integer id = request.get(id); String status =
	 * request.get("orderStatus"); System.out.println("in productCtlr : " +
	 * request); return new ResponseEntity<>(orderService.changeOrderStatus(id,
	 * status), HttpStatus.OK); }
	 */

	@PutMapping(value = "/update-profile/{id}")
	public ResponseEntity<?> changeOrderStatus(@PathVariable(value = "id") Integer userId,
			@RequestBody UserDTO userDTO) {
		return new ResponseEntity<>(cutsomerService.updateUserProfile(userId, userDTO), HttpStatus.OK);
	}

	@GetMapping(value = "/orders-between-date/{startDate}/{endDate}")
	public ResponseEntity<?> getOrdersBetweenDate(@PathVariable String startDate, @PathVariable String endDate) {
		DateTimeFormatter formatter =DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"); 
		LocalDateTime startDate1 = LocalDateTime.parse(startDate, formatter);
		LocalDateTime endDate1 = LocalDateTime.parse(endDate, formatter);
		System.out.println("startDate" + startDate);
		System.out.println("endDate"+endDate);

		return new ResponseEntity<> (orderService.findByIssuedOnBetween(startDate1, endDate1), HttpStatus.OK);
	}

	

}
