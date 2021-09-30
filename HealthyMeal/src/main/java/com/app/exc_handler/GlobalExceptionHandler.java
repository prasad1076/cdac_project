package com.app.exc_handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


import com.app.custom_excs.CustomerHandlingException;
import com.app.dto.ErrorResponse;

@ControllerAdvice//Mandatory class level annotation to tell SC whatever follows is centralized exc handler class
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
	//exc handling methods :
	@ExceptionHandler(CustomerHandlingException.class)
	public ResponseEntity<ErrorResponse>handleCustomerHandlingException(CustomerHandlingException e)
	{
		System.out.println("in handle customer exc");
		return new ResponseEntity<>(new ErrorResponse("Invalid Login", "Wrong Credentials"),HttpStatus.UNAUTHORIZED);
	}

	
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorResponse>HandlingException(Exception e)
	{
		System.out.println("in handle acct exc");
		return new ResponseEntity<>(new ErrorResponse("Server side error !!!!", e.getMessage()),HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
}
