package com.plixb.blog.controller;

import com.plixb.blog.model.Post;
import com.plixb.blog.repository.CategoryRepository;
import com.plixb.blog.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api/article/")
public class PostController {

    private final PostService postService;
    private final CategoryRepository categoryRepository;

    @Autowired
    public PostController(PostService postService,
                          CategoryRepository categoryRepository) {
        this.postService = postService;
        this.categoryRepository = categoryRepository;
    }

    @GetMapping
    public Collection<Post> findAll() {
        return postService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> findById(@PathVariable Long id) {
        Optional<Post> article = postService.findById(id);
        if(article.isPresent()) {
            return new ResponseEntity<>(article.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Post> save(@RequestBody Post article, @RequestParam("categoryId") Long categoryId) {
        Post savedArticle = postService.save(article, categoryId);
        return new ResponseEntity<>(savedArticle, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        postService.deleteById(id);
    }




}
