package com.app.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ProductDTO;
import com.app.pojos.CategoryType;
import com.app.pojos.Product;
import com.app.service.IProductService;


@RestController
@CrossOrigin
@RequestMapping("/product")
public class ProductController {

	@Autowired
	private IProductService productService;

	public ProductController() {
		System.out.println("in product controller" + getClass().getName());
	}
	
	
	@GetMapping(value="/product-list")
	//@RequestMapping(value = "/product-list", method = RequestMethod.GET)
	public ResponseEntity<?> getAllProduct() {
		return new ResponseEntity<>(productService.getAllProduct(), HttpStatus.OK);
	}

	// method for add product
	// @PostMapping(value="/add-product")
	@RequestMapping(value = "/add-product", method = RequestMethod.POST)
	public ResponseEntity<?> addProduct(@RequestBody ProductDTO productdto) {

		return new ResponseEntity<>(productService.addProduct(productdto), HttpStatus.OK);
	}

	// method for find by category
	@RequestMapping(value = "/find-product-by-categoryType/{categoryType}", method = RequestMethod.GET)
	public ResponseEntity<?> showUser(@PathVariable CategoryType categoryType) {
		// String role = (String) request.get("role");
		System.out.println("category :" + categoryType);
		return new ResponseEntity<>(productService.getProductByCategory(categoryType), HttpStatus.OK);
	}

	// method find by name
	@RequestMapping(value = "/find-by-name", method = RequestMethod.POST)
	public ResponseEntity<?> findByName(@RequestBody Map<String, String> request) {
		String name = request.get("name");
		System.out.println(productService.getProductByName(name));
		return new ResponseEntity<>(productService.getProductByName(name), HttpStatus.OK);
	}

	@RequestMapping(value = "/find-by-price", method = RequestMethod.POST)
	public ResponseEntity<?> findByprice(@RequestBody Map<String, Double> request) {
		double price = request.get("price");
		System.out.println(productService.getProductByPriceLessThan(price));
		return new ResponseEntity<>(productService.getProductByPriceLessThan(price), HttpStatus.OK);

	}

	/*
	 * @RequestMapping(value = "/delete-product-by-name", method =
	 * RequestMethod.POST) public ResponseEntity<?> addProduct(@RequestBody
	 * Map<String, String> request) { String name = request.get("name");
	 * System.out.println("in productCtlr : " + request); return new
	 * ResponseEntity<>(productService.deleteProductByName(name), HttpStatus.OK); }
	 */

	@RequestMapping(value = "/update-product/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateProduct(@PathVariable Integer id, @RequestBody ProductDTO productdto) {
		System.out.println(productdto);
		return new ResponseEntity<>(productService.updateProduct(id, productdto), HttpStatus.OK);
	}

	@RequestMapping(value = "/update-product", method = RequestMethod.PUT)
	public ResponseEntity<?> updateProduct(@RequestBody Product product) {
		System.out.println(product);
		return new ResponseEntity<>(productService.updateProduct(product), HttpStatus.CREATED);
	}

	@RequestMapping(value = "/delete-product-by-id/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> addProduct(@PathVariable Integer id) {
		System.out.println("in product Ctlr : " + id);
		return new ResponseEntity<>(productService.deleteProductById(id), HttpStatus.OK);
	}

}
