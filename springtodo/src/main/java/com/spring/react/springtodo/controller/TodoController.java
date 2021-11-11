package com.spring.react.springtodo.controller;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.react.springtodo.model.Todo;
import com.spring.react.springtodo.repo.TodoRepo;

@RestController
@RequestMapping("/todoapp")
@CrossOrigin(origins = "*")
public class TodoController {

	@Autowired
	TodoRepo todoRepo;

	@GetMapping("/todos")
	public ResponseEntity<List<Todo>> getAllTodos(/* @RequestParam(required = false) String title */) {
		return (new ResponseEntity<>(todoRepo.findAll(), HttpStatus.OK));
	  }

	@GetMapping("/todos/{id}")
	  public ResponseEntity<Todo> getTodoById(@PathVariable("id") long id) {
		return (new ResponseEntity<>(todoRepo.findById(id).get(), HttpStatus.OK));
	  }

	@PostMapping("/todos")
	  public ResponseEntity<Todo> createTodo(@RequestBody Todo todo) {
		return (new ResponseEntity<>(todoRepo.save(todo), HttpStatus.OK));
	  }

	@PutMapping("/todos/{id}")
	  public ResponseEntity<Todo> updateTutorial(@PathVariable("id") long id, @RequestBody Todo todo) {
		Todo savedTodo = todoRepo.getById(id);
		savedTodo.setTitle(todo.getTitle() != null ? todo.getTitle(): savedTodo.getTitle());
		savedTodo.setDescription(todo.getDescription() != null ? todo.getDescription(): savedTodo.getDescription());
		return new ResponseEntity<>(todoRepo.save(savedTodo), HttpStatus.CREATED);	    
	  }

	@DeleteMapping("/todos/{id}")
	  public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
		todoRepo.deleteById(id);
	    return new ResponseEntity<>(HttpStatus.OK);
	  }

	@DeleteMapping("/todos")
	  public ResponseEntity<HttpStatus> deleteAllTutorials() {
		todoRepo.deleteAll();
	    return new ResponseEntity<>(HttpStatus.OK);
	  }

	@GetMapping("/todos/published")
	  public ResponseEntity<List<Todo>> findByPublished() {
		return (new ResponseEntity<>(todoRepo.findByPublished(true), HttpStatus.OK));
	  }

}
