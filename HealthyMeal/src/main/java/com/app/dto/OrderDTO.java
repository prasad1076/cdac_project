package com.app.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Embedded;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.pojos.OrderProduct;
import com.app.pojos.OrderStatus;
import com.app.pojos.Payment;
import com.app.pojos.User;

public class OrderDTO {

	private double totalPrice;
	//@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDateTime issuedOn;

	private LocalDate statusDate;

	private OrderStatus orderStatus;

	private List<OrderProduct> orderProducts;

	private User selectedCustomer;

	/*
	 * @ManyToOne(fetch = FetchType.LAZY)
	 * 
	 * @JoinColumn(name="delivery_id",nullable=false) private User
	 * selectedDeliveryPerson;
	 */

	@Embedded
	private Payment payment;

	public OrderDTO() {

	}

	public OrderDTO(double totalPrice, LocalDateTime issuedOn, LocalDate statusDate, OrderStatus status) {
		super();
		this.totalPrice = totalPrice;
		this.issuedOn = issuedOn;
		this.statusDate = statusDate;
		this.orderStatus = status;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public LocalDateTime getIssuedOn() {
		return issuedOn;
	}

	public void setIssuedOn(LocalDateTime issuedOn) {
		this.issuedOn = issuedOn;
	}

	public LocalDate getStatusDate() {
		return statusDate;
	}

	public void setStatusDate(LocalDate statusDate) {
		this.statusDate = statusDate;
	}

	public OrderStatus getStatus() {
		return orderStatus;
	}

	public void setStatus(OrderStatus status) {
		this.orderStatus = status;
	}

	public List<OrderProduct> getOrderProducts() {
		return orderProducts;
	}

	public void setOrderProducts(List<OrderProduct> orderProducts) {
		this.orderProducts = orderProducts;
	}

	public User getSelectedCustomer() {
		return selectedCustomer;
	}

	public void setSelectedCustomer(User selectedCustomer) {
		this.selectedCustomer = selectedCustomer;
	}

	/*
	 * public User getSelectedDeliveryPerson() { return selectedDeliveryPerson; }
	 * 
	 * public void setSelectedDeliveryPerson(User selectedDeliveryPerson) {
	 * this.selectedDeliveryPerson = selectedDeliveryPerson; }
	 */

	public Payment getPayment() {
		return payment;
	}

	public void setPayment(Payment payment) {
		this.payment = payment;
	}

	@Override
	public String toString() {
		return "Order [totalPrice=" + totalPrice + ", issuedOn=" + issuedOn + ", statusDate=" + statusDate + ", status="
				+ orderStatus + "]";
	}

}
