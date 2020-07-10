package com.esum.TestBankClient.Bank.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.esum.TestBankClient.Bank.model.TestVO;

public interface TestRepository extends JpaRepository<TestVO, String>{
	
	public Optional<TestVO> findById(String id); 
}
