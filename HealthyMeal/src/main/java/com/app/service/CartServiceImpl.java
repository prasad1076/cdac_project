package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.app.dao.CartRepository;
import com.app.dao.ProductRepository;
import com.app.dao.UserRepository;
import com.app.dto.CartDTO;
import com.app.pojos.Cart;
import com.app.pojos.Product;
import com.app.pojos.User;

@Service
@Transactional
public class CartServiceImpl implements ICartService {

	@Autowired
	private CartRepository cartRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ProductRepository productRepository;

	/*
	 * @Override public String addToCart(CartDTO cartDTO) { Cart cart = new Cart();
	 * cart = cartRepository.findByUserIdAndProductId(cartDTO.getUserId(),
	 * cartDTO.getProductId()); if (cart != null) {
	 * cart.setQuantity(cart.getQuantity() + 1); cartRepository.save(cart); return
	 * "Saved To Cart!!!"; } else { Cart cart1 = new Cart();
	 * BeanUtils.copyProperties(cartDTO, cart1); cartRepository.save(cart1); return
	 * "Saved To Cart!!!"; } }
	 */

	@Override
	public String addItemToCart(Integer productId, Integer quantity, Integer userId) {
		User customer = userRepository.findById(userId).get();
		Product product = productRepository.findById(productId).get();
		double c_amt = quantity * product.getPrice();
		cartRepository.save(new Cart(quantity, product, customer, c_amt));
		return quantity + " " + "(s) of " + product.getName() + " added to cart";
	}

	/*
	 * @Override public List<Cart> getCartByuserId(Integer userId) { return
	 * cartRepository.getCartByUserId(userId); }
	 */

	/*
	 * @Override public String deleteCartByCartId(Integer userId) {
	 * cartRepository.deleteByUserId(userId); return
	 * "Cart Details Deleted Successfully";
	 * 
	 * }
	 */

	@Override
	public List<Cart> getAllCartContents(Integer userId) {		
		return cartRepository.findAllItemsByUser(userId);
	}
	
	@Override
	public String deleteByUserId(User userId) {
		cartRepository.deleteByUserId(userId);
		return "Cart Details Deleted Successfully";

	}
	
	@Override
	public Double getCartTotalAmt(Integer userId) {
		double cart_amt = 0.0;
		List<Cart> cart = cartRepository.findAllItemsByUser(userId);
		for (Cart cart2 : cart) {
			cart_amt = cart_amt + cart2.getCartamt();
		}
		System.out.println(cart_amt);
		// System.out.println(cart);
		return cart_amt;
	}

}
