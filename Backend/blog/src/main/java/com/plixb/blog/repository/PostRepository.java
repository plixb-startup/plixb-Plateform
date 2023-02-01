package com.plixb.blog.repository;

import com.plixb.blog.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
//    List<Post> findByTagId(Long tagId);
//
//    List<Post> findByCategoryId(Long categoryId);

    Collection<Post> findAllByOrderByCreationDateDesc();

    Optional<Post> findById(Long id);
}
