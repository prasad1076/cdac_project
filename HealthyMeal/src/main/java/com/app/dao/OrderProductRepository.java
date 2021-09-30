package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.OrderProduct;

public interface OrderProductRepository extends JpaRepository<OrderProduct,Integer> {

	//List<OrderProduct> findAllByOrderId(Integer id);

}
