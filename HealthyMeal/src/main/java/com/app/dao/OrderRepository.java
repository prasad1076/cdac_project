package com.app.dao;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

	//@Query("select o from Order o where o.issuedOn = :issuedOn")
	//@Query("select o from Order o where o.issuedOn between :issuedOn and now()")//Testing 
	//public List<Order> findByStartDateAfter(@Param("issuedOn") LocalDate issuedOn);
	//SELECT e FROM Events e WHERE e.eventsDate BETWEEN :startDate AND :endDate
	List<Order> findByIssuedOnBefore(LocalDateTime today);
	
	List<Order> findByIssuedOnBetween(LocalDateTime d1,LocalDateTime d2);
}
