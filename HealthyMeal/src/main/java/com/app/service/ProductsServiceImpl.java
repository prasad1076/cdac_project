package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ProductRepository;
import com.app.dto.ProductDTO;
import com.app.pojos.CategoryType;
import com.app.pojos.Product;

@Service
@Transactional
public class ProductsServiceImpl implements IProductService {

	// dependency : Product dao i/f
	@Autowired
	private ProductRepository productRepository;

	@Override
	public List<Product> getAllProduct() {
		return productRepository.findAll();
	}

	@Override
	public String addProduct(ProductDTO productdto) {
		
		if (productdto != null) {
			Product product = new Product();
			BeanUtils.copyProperties(productdto, product);
		System.out.println("productdto" + productdto);
			productRepository.save(product);
			return "Product :	" + product.getName() + " Added successfully!!";
		} else
			return "Product Addition failed";
	}

	
	  @Override
	public List<Product> getProductByCategory(CategoryType categoryType){
		
		System.out.println("Role "+ categoryType);
	
	return productRepository.findByCategoryType(categoryType);
	}
	 

	@Override
	public List<Product> getProductByName(String productName) {
		
		return productRepository.findByName(productName);
	}

	@Override
	public List<Product> getProductByPriceLessThan(double productPrice) {
		
		return productRepository.findByPriceLessThan(productPrice);
	}

	@Override
	public String deleteProductByName(String productName) {
		if(productName!=null)
		{
		 productRepository.deleteByName(productName);
		 return "Product : " +productName+ "deleted successfull!!" ;
		}else
			return "No Product Found with name " +productName+ " ";
	}

	@Override
	public String updateProduct(int productId, ProductDTO productdto) {
		Product product = productRepository.findById(productId).get();
		if(product!=null) {
			System.out.println("product " +product);
		BeanUtils.copyProperties(productdto, product);
		System.out.println("product Added : " +productRepository.save(product));
		return "Product updated : " +product.getName();
		}else
			
		return "Product Id" +productId+ "not found.";
	}

	@Override
	public Product updateProduct(Product product) {
		System.out.println("in update product details "+product);
		return productRepository.save(product);
	}
	
	@Override
	public String deleteProductById(Integer id) {
		if(id!=null)
		{
		 productRepository.deleteById(id);
		 return "Product : " +id+ "deleted successfull!!" ;
		}else
			return "No Product Found with name " +id+ " ";
	}

}
