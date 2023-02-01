package com.plixb.blog.controller;

import com.plixb.blog.model.Post;
import com.plixb.blog.payload.PostDto;
import com.plixb.blog.repository.CategoryRepository;
import com.plixb.blog.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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



    @GetMapping("/{id}")
    public ResponseEntity<PostDto> getPostById(@PathVariable(name = "id") long id){
        return ResponseEntity.ok(postService.getPostById(id));
    }

    @PostMapping
    public ResponseEntity<PostDto> createPost(@Valid @RequestBody PostDto postDto) {

        return new ResponseEntity<>(postService.createPost(postDto), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id) {
        postService.deletePostById(id);

        return new ResponseEntity<>("Post entity deleted successfully.", HttpStatus.OK);

    }




}
