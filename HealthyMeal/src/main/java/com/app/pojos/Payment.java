package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Embeddable
public class Payment {
	private double amount;
	@Column(name="payment_date")
	private LocalDate paymentDate;
	@Enumerated(EnumType.STRING)
	@Column(length=30)
	private PaymentStatus status;
	@Enumerated(EnumType.STRING)
	@Column(name="payment_type",length=30)
	private PaymentType paymentType;
	
	public Payment() {
	}

	public Payment(double amount, LocalDate paymentDate, PaymentStatus status, PaymentType paymentType ) {
		super();
		this.amount = amount;
		this.paymentDate = paymentDate;
		this.status = status;
		this.paymentType = paymentType;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public LocalDate getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(LocalDate paymentDate) {
		this.paymentDate = paymentDate;
	}

	public PaymentStatus getStatus() {
		return status;
	}

	public void setStatus(PaymentStatus status) {
		this.status = status;
	}

	public PaymentType getpaymentType() {
		return paymentType;
	}

	public void setpaymentType(PaymentType paymentType) {
		this.paymentType = paymentType;
	}

	@Override
	public String toString() {
		return "Payment [amount=" + amount + ", paymentDate=" + paymentDate + ", status=" + status + ", paymentType="
				+ paymentType + "]";
	}
	
}
