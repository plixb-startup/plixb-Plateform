package com.plixb.blog.service;

import com.plixb.blog.model.Article;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public interface ArticleService {

    Article save(Article article, Long categoryId);
    Optional<Article> findById(Long id);
    Collection<Article> findAll();
    void deleteById(Long id);
    Article update(Article article);

//    List<Article> findByCategoryId(Long categoryId);

}
