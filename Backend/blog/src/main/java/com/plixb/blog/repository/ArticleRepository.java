package com.plixb.blog.repository;

import com.plixb.blog.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
//    List<Article> findByTagId(Long tagId);
//
//    List<Article> findByCategoryId(Long categoryId);

    Collection<Article> findAllByOrderByCreationDateDesc();

    Optional<Article> findById(Long id);
}
