package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.CartDTO;
import com.app.pojos.Cart;
import com.app.pojos.User;

public interface ICartService {
	//Object addToCart(int userId, int productId, int quantity);

	//Object addToCart(CartDTO cartDTO);

	//double getProductPrice(int productId);
	
	String addItemToCart(Integer productId, Integer quantity, Integer userId);
	
	//List<Cart> getCartByuserId(Integer userId);
	
	//String deleteCartByCartId(Integer userId);
	
	String deleteByUserId(User userId);
	
	List<Cart> getAllCartContents(Integer userId);
	
	Double getCartTotalAmt(Integer userId);
}
