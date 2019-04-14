package com.springboot.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.dao.EmployeeRepository;
import com.springboot.model.Employee;

@Service
public class EmployeeServiceImp  {
	@Autowired
	private EmployeeRepository employeeRepository;
	//private static List<Employee> employees = new ArrayList<>();


	public List<Employee> getEmployee() {
		// TODO Auto-generated method stub
		return employeeRepository.findAll();
	}
	public Employee addEmployee(Employee emp) {
	
			employeeRepository.save(emp);
		return emp;
	}
	
	public Employee updateEmployee(Employee emp) {
		
			//deleteEmployee(emp.getId());
			employeeRepository.save(emp);
		return emp;
	}
	
	public Employee empFindById(Long theId) {
		// TODO Auto-generated method stub
		Optional<Employee>result = employeeRepository.findById(theId);
		Employee emp=null;
		if(result.isPresent()) {
			emp=result.get();
		}else {
			throw new RuntimeException("Data not found "+theId);
		}
		return emp;
}

	public void deleteEmployee(Long theId) {
		// TODO Auto-generated method stub
		employeeRepository.deleteById(theId);
	}

	
}
