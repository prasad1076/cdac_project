package com.app.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.app.pojos.Order;


public interface IOrderService {
	
	List<Order> getAllOrders();
	
	List<Order> findPresentOrder(LocalDateTime localDateTime);
	
	String changeOrderStatus(int orderId);

	//Object changeOrderStatus(Integer id, String status);
	
	List<Order> findByIssuedOnBetween(LocalDateTime d1,LocalDateTime d2);
	
	//String placeOrder(Order OrderDTO);

	String placeOrderForUser(Integer userId);
	
}
