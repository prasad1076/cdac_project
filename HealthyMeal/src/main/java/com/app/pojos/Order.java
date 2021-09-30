package com.app.pojos;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="orders")
public class Order extends BaseEntity {
	
	@Column(name="total_price")
	private double totalPrice;
	
	@DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
	@Column(name="order_date")
	private LocalDateTime issuedOn;
	
	@Enumerated(EnumType.STRING)
	@Column(length=25,name="order_status")
	private OrderStatus orderStatus;
	
	/*
	 * @DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
	 * 
	 * @Column(name="status_update_date") private LocalDateTime statusUpdateDate;
	 */
	
	/*
	 * @OneToOne
	 * 
	 * @JoinColumn(name="delivery_address_id") private Address deliveryAddress;
	 */
	
	@ManyToOne
	@JoinColumn(name="customer_id",nullable = false)
	private User userId;
	/*
	 * @ManyToOne(fetch = FetchType.LAZY)
	 * 
	 * @JoinColumn(name="employee_id") private User employee;
	 */

	public Order() {
	}

	public Order(double totalPrice, LocalDateTime issuedOn,
			OrderStatus orderStatus/* , LocalDateTime statusUpdateDate */,
			/* Address deliveryAddress */ User userId/* , User employee */) {
		super();
		this.totalPrice = totalPrice;
		this.issuedOn = issuedOn;
		this.orderStatus = orderStatus;
		//this.statusUpdateDate = statusUpdateDate;
		//this.deliveryAddress = deliveryAddress;
		this.userId = userId;
	//	this.employee = employee;
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

	public OrderStatus getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(OrderStatus orderStatus) {
		this.orderStatus = orderStatus;
	}

	/*
	 * public LocalDateTime getStatusUpdateDate() { return statusUpdateDate; }
	 * 
	 * public void setStatusUpdateDate(LocalDateTime statusUpdateDate) {
	 * this.statusUpdateDate = statusUpdateDate; }
	 */

	
	
	/*
	 * public Address getDeliveryAddress() { return deliveryAddress; }
	 * 
	 * public void setDeliveryAddress(Address deliveryAddress) {
	 * this.deliveryAddress = deliveryAddress; }
	 */

	
	
	/*
	 * @JsonIgnore public User getEmployee() { return employee; }
	 * 
	 * public void setEmployee(User employee) { this.employee = employee; }
	 */

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Order [ID=" + getId() + ",totalPrice=" + totalPrice + ", orderDate=" + issuedOn + ", orderStatus=" + orderStatus
				+ ", statusUpdateDate=" /* + statusUpdateDate */ + "]";
	}

	
	
}