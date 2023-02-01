package com.plixb.blog.service.implementation;

import com.plixb.blog.exceptions.CategoryExistException;
import com.plixb.blog.model.Category;
import com.plixb.blog.payload.CategoryDto;
import com.plixb.blog.repository.CategoryRepository;
import com.plixb.blog.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImplementation implements CategoryService {
    private final CategoryRepository categoryRepository;


    @Autowired
    public CategoryServiceImplementation(CategoryRepository categoryRepository) {

        this.categoryRepository = categoryRepository;
    }


    @Override
    public CategoryDto addCategory(CategoryDto categoryDto) {
        return null;
    }

    @Override
    public CategoryDto getCategory(Long categoryId) {
        return null;
    }

    @Override
    public List<CategoryDto> getAllCategories() {
        return null;
    }

    @Override
    public CategoryDto updateCategory(CategoryDto categoryDto, Long categoryId) {
        return null;
    }

    @Override
    public void deleteCategory(Long categoryId) {

    }
}
