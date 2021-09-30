package com.app.service;

import java.util.List;

import com.app.dto.ProductDTO;
import com.app.pojos.CategoryType;
import com.app.pojos.Product;

public interface IProductService {

	// method to get all product
	List<Product> getAllProduct();

	// method to add product by category
	String addProduct(ProductDTO productdto);

	// get product by category
	List<Product> getProductByCategory(CategoryType category);

	// get product by name
	List<Product> getProductByName(String productName);

	// get product by price lessthan
	List<Product> getProductByPriceLessThan(double productPrice);

	// delete product by name
	String deleteProductByName(String productName);

	String deleteProductById(Integer id);

	// update product
	String updateProduct(int productId, ProductDTO productdto);
	
	Product updateProduct(Product product);
	
	
}
