package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Cart;
import com.app.pojos.User;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer>{

	Cart findByUserIdAndProductId(int userId, int productId);
	
	
	@Query("Select c from Cart c join fetch c.productId where c.userId.id=:id")
	List<Cart> findAllItemsByUser(@Param("id") Integer userId);
	 
	
	/*
	 * @Modifying
	 * 
	 * @Query("delete from Cart c where c.userId = ?1") void deleteByUserId(Integer
	 * userId);
	 */


	String deleteByUserId(User userId);


	  	//List<Cart> findByUserId(Integer userId);
	  
		/*
		 * @Query("select SUM(c.cart_amt) from Cart c where c.userId=:uId") Double
		 * getCartTotalAmt(@Param("uId") Integer userId);
		 */

		/*
		 * @Query("select SUM(c.cartamt) from Cart c where c.userId=:uId") Double
		 * getCartamtByUserId(@Param("uId") Integer userId);
		 */
}
