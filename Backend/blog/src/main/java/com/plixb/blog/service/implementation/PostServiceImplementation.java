package com.plixb.blog.service.implementation;

import com.plixb.blog.model.Post;
import com.plixb.blog.model.Category;
import com.plixb.blog.payload.PostDto;
import com.plixb.blog.repository.PostRepository;
import com.plixb.blog.repository.CategoryRepository;
import com.plixb.blog.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImplementation implements PostService {

    private final PostRepository postRepository;
    private final CategoryRepository categoryRepository;

    @Autowired
    public PostServiceImplementation(PostRepository postRepository, CategoryRepository categoryRepository) {
        this.postRepository = postRepository;
        this.categoryRepository = categoryRepository;
    }


    @Override
    public PostDto createPost(PostDto postDto) {
        return null;
    }

    @Override
    public PostDto getPostById(long id) {
        return null;
    }

    @Override
    public PostDto updatePost(PostDto postDto, long id) {
        return null;
    }

    @Override
    public void deletePostById(long id) {

    }

    @Override
    public List<PostDto> getPostsByCategory(Long categoryId) {
        return null;
    }
}
