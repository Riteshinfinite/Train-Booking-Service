package com.casestudy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.casestudy.entity.UserInfo;

import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> {
    Optional<UserInfo> findByName(String username);

//	String findRolesByName(String username);

}
