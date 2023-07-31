package com.casestudy.service;

import com.casestudy.dto.Product;

import com.casestudy.entity.UserInfo;
import com.casestudy.repository.UserInfoRepository;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
public class ProductService {

    List<Product> productList = null;

    @Autowired
    private UserInfoRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

//    @PostConstruct
//    public void loadProductsFromDB() {
//        productList = IntStream.rangeClosed(1, 100)
//                .mapToObj(i -> ((Object) Product.builder())
//                        .productId(i)
//                        .name("product " + i)
//                        .qty(new Random().nextInt(10))
//                        .price(new Random().nextInt(5000)).build()
//                ).collect(Collectors.toList());
//    }


    public List<Product> getProducts() {
        return productList;
    }

    public Product getProduct(int id) {
        return productList.stream()
                .filter(product -> product.getProductId() == id)
                .findAny()
                .orElseThrow(() -> new RuntimeException("product " + id + " not found"));
    }


//    public String addUser(UserInfo userInfo) {
//        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
//        repository.save(userInfo);
//        return "user added to system";
//    }
    
    public String addUser(UserInfo userInfo) {
    	String name = userInfo.getName();
    	UserInfo obj1 = repository.findByName(name).orElse(null);    	
    	System.out.println(obj1);
    	if(obj1==null)
    	{
	        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
	        repository.save(userInfo);
	        return "Registration Successfully";
    	}else {
    		return "This UserName is Already Registered.";
    	}
    }

	public String getRoles(String username) {
//		String lst = repository.findByName(username);
    	UserInfo obj2 = repository.findByName(username).orElse(null);
    	if(obj2!=null) {
    		return obj2.getRoles();
    	}
    	return "Not Found";
	}
    
//    public ResponseEntity<String> addUser(@RequestBody UserInfo userInfo) {
//        try {
//            userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
//            repository.save(userInfo);
//            return ResponseEntity.status(HttpStatus.CREATED).body("User added to system");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add user");
//        }
//    }
}
