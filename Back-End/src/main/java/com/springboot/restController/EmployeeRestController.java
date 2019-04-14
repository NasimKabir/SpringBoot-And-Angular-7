package com.springboot.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.Employee;
import com.springboot.service.EmployeeServiceImp;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeRestController {
	@Autowired
	private EmployeeServiceImp employeeService;

	@GetMapping("/employee")
	public List<Employee> allempInfo() {
		return employeeService.getEmployee();
	}

	@GetMapping("/employee/{id}")
	public Employee getemp(@PathVariable Long id) {
		Employee emp = employeeService.empFindById(id);
		return emp;
	}

	@PutMapping("/employee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee emp) {
		employeeService.updateEmployee(emp);
		return new ResponseEntity<Employee>(emp, HttpStatus.OK);
	}

	@PostMapping("/employee")
	public ResponseEntity<Void> updateEmployee(@RequestBody Employee emp) {

		employeeService.addEmployee(emp);

		return ResponseEntity.noContent().build();
	}

	@DeleteMapping("/employee/{id}")
	public ResponseEntity<Void> deleteEmp(@PathVariable Long id) {
		employeeService.deleteEmployee(id);
		return ResponseEntity.noContent().build();
	}
}
