package com.app.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.User;
import com.app.service.ICartService;
import com.app.service.IOrderService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/customer")
public class CustomerController {
	// dependency
	@Autowired
	private ICartService cartService;

	@Autowired
	private IOrderService orderService;

	public CustomerController() {
		System.out.println("in customer Controller" + getClass().getName());
	}

	/*
	 * // @RequestMapping(value = "/add-to-cart}", method = RequestMethod.POST)
	 * 
	 * @PostMapping("/add-to-cart") public ResponseEntity<?> addToCart(@RequestBody
	 * CartDTO cartDTO) { System.out.println("Cart DTO " + cartDTO);
	 * 
	 * return new ResponseEntity<>(cartService.addToCart(cartDTO), HttpStatus.OK);
	 * // double productPrice = cartService.getProductPrice(productId); // int
	 * productId = request.get("productId");
	 * 
	 * System.out.println("User Id : " + userId); System.out.println("product Id :"
	 * + productId); System.out.println("quantity : " + quantity);
	 * 
	 * 
	 * }
	 */

	// add to cart
	@PostMapping("/add-to-cart")
	public ResponseEntity<?> addToCart(@RequestBody HashMap<String, Integer> map) {
		Integer productId = map.get("productId");
		Integer quantity = map.get("quantity");
		System.out.println("ProductId: " + productId + " quantity: " + quantity);
		Integer userId = map.get("userId");
		return new ResponseEntity<>(cartService.addItemToCart(productId, quantity, userId), HttpStatus.CREATED);
	}

	/*
	 * @GetMapping("/cart/{userId}") public ResponseEntity<?>
	 * getCartByuserId(@PathVariable Integer userId) {
	 * System.out.println("in getCartByuserId: " + userId); return new
	 * ResponseEntity<>(cartService.getCartByuserId(userId), HttpStatus.OK); }
	 */

	// view cart
	@GetMapping("/cart/{userId}")
	public ResponseEntity<?> getCartContents(@PathVariable Integer userId) {

		// List<Cart> cartItems= cartService.getAllCartContents(userId);
		return new ResponseEntity<>(cartService.getAllCartContents(userId), HttpStatus.OK);
	}

	/*
	 * @DeleteMapping("/cart-delete/{userId}") public ResponseEntity<?>
	 * deleteItemFromCart(@PathVariable Integer userId) {
	 * System.out.println("in deleteItemFromCart: " + userId); return new
	 * ResponseEntity<>(cartService.deleteCartByCartId(userId), HttpStatus.OK);
	 * 
	 * }
	 */

	@DeleteMapping("/cart-delete/{userId}")
	public ResponseEntity<?> deleteItemFromCart(@PathVariable User userId) {
		System.out.println("in deleteItemFromCart: " + userId);
		return new ResponseEntity<>(cartService.deleteByUserId(userId), HttpStatus.OK);

	}

	// cart total amount
	@GetMapping("/cart/total-amt/{userId}")
	public ResponseEntity<?> getCartTotalAmount(@PathVariable Integer userId) {
		System.out.println("in getCartTotalAmount: " + userId);
		return new ResponseEntity<>(cartService.getCartTotalAmt(userId), HttpStatus.OK);
	}

	@PostMapping("/place-order/{userId}")
	public ResponseEntity<?> placeOrderFromCart(@PathVariable Integer userId) {
		return new ResponseEntity<>(orderService.placeOrderForUser(userId), HttpStatus.ACCEPTED);
	}

}
