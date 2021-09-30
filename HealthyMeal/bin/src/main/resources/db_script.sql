create database pizza_hut;
use pizza_hut;
insert into users values(default,"ankit@gmail.com","Ankit","Soni","1234","8109839189","ADMIN");
insert into users values(default,"ajinkya@gmail.com","Ajinkya","Badgujar","123","1234567890","EMPLOYEE");
insert into users values(default,"ab@gmail.com","A","B","ab#123","9934567890","CUSTOMER");
insert into users values(default,"abc@gmail.com","ABC","BBC","ab#1234","9934567899","EMPLOYEE");

insert into orders values(default, '2021-03-15', 'PENDING', 99.99, '2021-03-15', "COD", "PAID", '2021-03-15', 999, 2);

 insert into products values(default,'PIZZA','tasty','Italian Pizza',300.15,'abc.img',0);