package com.esum.TestBankClient.Bank.model;

import javax.persistence.*;
import lombok.*;


@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity(name="test")
public class TestVO {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String id;
	private String name;
	private int age;

	@Builder
	public TestVO(String name, int age) {
		this.name = name;
		this.age = age;
	}
	
}
