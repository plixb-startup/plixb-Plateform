package com.plixb.blog.controller;

import com.plixb.blog.model.Article;
import com.plixb.blog.model.Category;
import com.plixb.blog.repository.CategoryRepository;
import com.plixb.blog.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/article/")
public class ArticleController {

    private final ArticleService articleService;
    private final CategoryRepository categoryRepository;

    @Autowired
    public ArticleController(ArticleService articleService,
                             CategoryRepository categoryRepository) {
        this.articleService = articleService;
        this.categoryRepository = categoryRepository;
    }

    @GetMapping
    public Collection<Article> findAll() {
        return articleService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Article> findById(@PathVariable Long id) {
        Optional<Article> article = articleService.findById(id);
        if(article.isPresent()) {
            return new ResponseEntity<>(article.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Article> save(@RequestBody Article article, @RequestParam("categoryId") Long categoryId) {
        Article savedArticle = articleService.save(article, categoryId);
        return new ResponseEntity<>(savedArticle, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        articleService.deleteById(id);
    }




}
