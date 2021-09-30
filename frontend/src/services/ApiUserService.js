import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080';

class ApiUserService {
    

    //Edit Profile
    //return user object
    signUp(body, header) {
        return axios.post(USER_API_BASE_URL + '/user/signup' , body, header);
    }

    //Change password
    //retrun successfully msg
    editUserPassword(user_id, pwd) {
        return axios.put(USER_API_BASE_URL + '/change_pwd' + user_id + '/'+pwd);
    }

    //Authenticate user
    //return user object
    signInForAll(body, header) {
        return axios.post(USER_API_BASE_URL + '/user/signin', body, header);
    }

    //get address
    //retrun address object
    getUserAddress(user_id) {
        return axios.get(USER_API_BASE_URL + '/address/' + user_id);
    }

    //Change address
    //retrun successfully msg
    editUserAddress(userId, address) {
        return axios.put(USER_API_BASE_URL + '/address/' + userId, address);
    }

    //get all product by search from DB
    //return list of product which match with searchName
    fetchProductsById(productId) {
        return axios.get(USER_API_BASE_URL + '/product/' + productId);
    }

    //get all product by search from DB
    //return list of product which match with searchName
    fetchProductsByName(searchName) {
        return axios.get(USER_API_BASE_URL + '/product/search/' + searchName);
    }

    //get all product by category_id randomly from DB
    //return list of products
    fetchProductsByCategoryId(categoryId) {
        return axios.get(USER_API_BASE_URL + '/product/list/' + categoryId);
    }
    
    //get all sorted product by category_id from Low to High from DB
    //return list of products
    sortProductsByLowToHigh(categoryId) {
        return axios.get(USER_API_BASE_URL + '/product/lowtohigh/' + categoryId);
    }

    //get all sorted product by category_id from High to Loq from DB
    //return list of products
    sortProductsByHighToLow(categoryId) {
        return axios.get(USER_API_BASE_URL + '/product/hightolow/' + categoryId);
    }

    addProductToCart(cart){
        return axios.post(USER_API_BASE_URL + '/cart', cart);
    }

    getCartByUserId(userId){
        return axios.get(USER_API_BASE_URL + '/cart/'+ userId);
    }

    deleteCartByUserId(cartId){
        return axios.delete(USER_API_BASE_URL + '/cart/'+ cartId);
    }

    getTAmtUserId(userId){
        return axios.get(USER_API_BASE_URL + '/cart/tamt/'+ userId);
    }

    getSAmtByUserId(userId){
        return axios.get(USER_API_BASE_URL + '/cart/samt/'+ userId);
    }

    //on payment
    //orders : customer_id/user_id, product_name, delivery_boy_id/user_id, order_delivery_status = pending, total_price, order_date, delivery_date = null
    //return the orders id which required in order_details
    addorders(orders) {
        return axios.post(""+USER_API_BASE_URL+'/orders', orders);
    }
    
    //get all order_history from DB by user_id
    //return list of orders which match with user_id
    fetchOrdersList(user_id) {
        return axios.get(USER_API_BASE_URL + '/orders/' + user_id);
    }

    //on payment
    //order_details : customer_id/user_id, product_name, final_price, qty, grams, order_id
    //Array of order_details
    addorderDetails(array) {
        return axios.post(""+USER_API_BASE_URL+'/order_details', array);
    }

    //on payment
    //payment : payment_type, payment_date = now() = auto on SERVER side, payment status = paid, customer_id/user_id, order_id
    //Array of order_details
    addpaymentDetails(payment) {
        return axios.post(""+USER_API_BASE_URL+'/payment', payment);
    }  
}

export default new ApiUserService();