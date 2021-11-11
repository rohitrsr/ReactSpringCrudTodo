package com.spring.react.springtodo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.react.springtodo.model.Todo;

public interface TodoRepo extends JpaRepository<Todo, Long> {

	List<Todo> findByTitle(String title);

	List<Todo> findByPublished(boolean b);
	
}
