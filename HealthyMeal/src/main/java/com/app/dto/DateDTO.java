package com.app.dto;

import java.time.LocalDateTime;

public class DateDTO<T> {
private String	status;
private T data;

public T getData() {
	return data;
}

public void setData(T data) {
	this.data = data;
}

public DateDTO(String status, T data) {
	super();
	this.status = status;
	this.data = data;
}

public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}

public DateDTO(T data) {
	super();
	this.data = data;
}

@Override
public String toString() {
	return "DateDTO [status=" + status + ", data=" + data + "]";
}



 
 
}
