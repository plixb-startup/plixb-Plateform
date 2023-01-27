package com.plixb.blog.service.implementation;

import com.plixb.blog.model.Article;
import com.plixb.blog.model.Category;
import com.plixb.blog.repository.ArticleRepository;
import com.plixb.blog.repository.CategoryRepository;
import com.plixb.blog.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import javax.servlet.http.HttpServletResponse;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class ArticleServiceImplementation implements ArticleService {

    private final ArticleRepository articleRepository;
    private final CategoryRepository categoryRepository;

    @Autowired
    public ArticleServiceImplementation(ArticleRepository articleRepository, CategoryRepository categoryRepository) {
        this.articleRepository = articleRepository;
        this.categoryRepository = categoryRepository;
    }

    public List<Article> findAll() {
        return articleRepository.findAll();
    }

    public Collection<Article> getAll() {
        return articleRepository.findAllByOrderByCreationDateDesc();
    }
    public Optional<Article> findById(Long id) {
        return articleRepository.findById(id);
    }

    public Article save(Article article, Long categoryId) {
    Optional<Category> currentCategory = categoryRepository.findById(categoryId);
    if(currentCategory.isEmpty()){
        throw new NotFoundException("Category not found: " + article.getCategory());
    }

    article.setCategory(currentCategory.get());

    return articleRepository.save(article);

    }

    public void deleteById(Long id) {
        articleRepository.deleteById(id);
    }

    @Override
    public Article update(Article article) {
        return null;
    }


//
//    @Override
//    public List<Article> findByCategoryId(Long categoryId) {
//        return articleRepository.findByCategoryId(categoryId);
//    }
//



}
