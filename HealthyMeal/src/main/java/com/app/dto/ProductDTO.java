package com.app.dto;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.app.pojos.CategoryType;
import com.app.pojos.Status;

public class ProductDTO {
	private int id;
	private String name;
	private String description;
	private double price;
	@Enumerated(EnumType.STRING)
	private Status status;
	@Enumerated(EnumType.STRING)
	private CategoryType categoryType;
	//private String image;

	public ProductDTO() {
		System.out.println("in product Dto" + getClass().getName());
	}

	public ProductDTO(int id, String name, String description, double price, Status status,
			CategoryType categoryType/*
										 * , String image
										 */) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.status = status;
		this.categoryType = categoryType;
		// this.image = image;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	/*
	 * public String getImage() { return image; }
	 * 
	 * public void setImage(String image) { this.image = image; }
	 */

	@Override
	public String toString() {
		return "ProductDTO [id=" + id + ", name=" + name + ", description=" + description + ", price=" + price
				+ ", status=" + status + ", categoryType=" + categoryType + ", image=" /* + image + "]" */;
	}

}
