package com.plixb.blog.exceptions;

import com.plixb.blog.model.Category;

public class CategoryExistException extends RuntimeException {

    public CategoryExistException(){
        super();
    }

    public CategoryExistException(String message) {
        super(message);
    }


}
