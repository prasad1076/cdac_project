package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Min;

@Entity
@Table(name = "products")
public class Product extends BaseEntity {
	@Column(length = 20)
	private String name;
	@Column(length = 200, nullable = false)
	private String description;
	@Min(0)
	@Column(nullable = false)
	private double price;
	@Enumerated(EnumType.STRING)
	private Status status;
	@Enumerated(EnumType.STRING)
	@Column(nullable = true, length = 20)
	private CategoryType categoryType;
	//private String productImage;

	@Transient
	//@JsonIgnore
	@OneToMany(mappedBy = "selectedProduct", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<OrderProduct> orderProducts = new ArrayList<>();

	public Product() {
		System.out.println("in ctor of Product");
	}

	public Product(String name, String description, double price,
			Status status, /* String productImage, */
			CategoryType categoryType) {
		super();
		this.name = name;
		this.description = description;
		this.price = price;

		this.status = status;
		this.categoryType = categoryType;
		//this.productImage = productImage;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public CategoryType getCategoryType() {
		return categoryType;
	}

	public void setCategoryType(CategoryType categoryType) {
		this.categoryType = categoryType;
	}

	public List<OrderProduct> getOrderProducts() {
		return orderProducts;
	}

	public void setOrderProducts(List<OrderProduct> orderProducts) {
		this.orderProducts = orderProducts;
	}

	@Override
	public String toString() {
		return "Product [name=" + name + ", description=" + description + ", price=" + price + ", status=" + status
				+ ", categoryType=" + categoryType + ", orderProducts=" + orderProducts + "]";
	}

	/*
	 * public String getProductImage() { return productImage; }
	 * 
	 * public void setProductImage(String productImage) { this.productImage =
	 * productImage; }
	 */

	
}
