package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.CategoryType;
import com.app.pojos.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

	// find product by category
	//@Query("select p from Product p where p.categoryType =:category")
	//public List<Product> findbyCategory(@Param("category") CategoryType category);
	//public List<Product> findByCategoryType();

	public List<Product> findByName(String productName);

	public List<Product> findByPriceLessThan(double productPrice);

	public String deleteByName(String productName);

	// find product by category Type
	public List<Product> findByCategoryType(CategoryType category);
	
	
}
