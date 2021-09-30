package com.app.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CartRepository;
import com.app.dao.OrderProductRepository;
import com.app.dao.OrderRepository;
import com.app.dao.UserRepository;
import com.app.pojos.Cart;
import com.app.pojos.Order;
import com.app.pojos.OrderProduct;
import com.app.pojos.OrderStatus;
import com.app.pojos.Role;
import com.app.pojos.User;

@Service
@Transactional
public class OrderServiceImpl implements IOrderService {
	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private OrderProductRepository orderproductRepository;

	@Override
	public List<Order> getAllOrders() {

		return orderRepository.findAll();
	}

	
	public List<Order> findPresentOrder(LocalDateTime today) {
		return orderRepository.findByIssuedOnBefore(today);
	}

	@Override
	public String changeOrderStatus(int orderId) {
		Order order = orderRepository.findById(orderId).get();
		if (order != null) {
			System.out.println("order : " + order);
			if (order.getOrderStatus().equals(OrderStatus.PENDING)) {
				order.setOrderStatus(OrderStatus.DELIVERED);
			}
			return "Order status chnaged Successfully";

		}

		return "Order not found";

	}


	@Override
	public List<Order> findByIssuedOnBetween(LocalDateTime d1, LocalDateTime d2) {
		// TODO Auto-generated method stub
		return orderRepository.findByIssuedOnBetween(d1, d2);
	}


	/*
	 * @Override public String placeOrder(Order orderDTO) { if (orderDTO != null) {
	 * Order order = new Order(); BeanUtils.copyProperties(orderDTO, order);
	 * System.out.println("orderDTO : " + orderDTO); System.out.println("Order : " +
	 * order); // set role of user //.setRole(Role.CUSTOMER);
	 * //System.out.println("user : " + ); System.out.println("Order added: " +
	 * orderRepository.save(order)); return "Order Placed successfully!"; } else
	 * return "Order Not Placed!";
	 * 
	 * }
	 */


	@Override
	public String placeOrderForUser(Integer userId) {
		// get all cart items for given user
		List<Cart> cartItems = cartRepository.findAllItemsByUser(userId);
		//Payment payment=new Payment();
		
		double total = 0.0;
		for (Cart item : cartItems) {
			total += item.getQuantity() * item.getSelectedProduct().getPrice();
			
		}

		User user = userRepository.findById(userId).get();

		Order newOrder = new Order(total, LocalDateTime.now(), OrderStatus.PENDING/* , LocalDateTime.now() */, user);
		orderRepository.save(newOrder);

		cartItems.forEach(item -> {
			orderproductRepository.save(new OrderProduct(item.getSelectedProduct().getPrice(), item.getQuantity(), newOrder,
					item.getSelectedProduct()));
		});
		cartRepository.deleteAll(cartItems);
		
		return "Order Placed Successfully!";
	}
	
}
