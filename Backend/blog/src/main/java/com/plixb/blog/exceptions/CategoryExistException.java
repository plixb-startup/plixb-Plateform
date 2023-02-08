package com.plixb.blog.exceptions;

import com.plixb.blog.model.Category;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(value = HttpStatus.CONFLICT)
public class CategoryExistException extends RuntimeException {

    private String resourceName;
    private String fieldName;
    private long fieldValue;


    public CategoryExistException(String resourceName, String fieldName, long fieldValue) {
        super(String.format("%s not found with %s : '%s'", resourceName, fieldName, fieldValue)); // Post not found with id : 1
        this.resourceName = resourceName;
        this.fieldName = fieldName;
        this.fieldValue = fieldValue;
    }

    public CategoryExistException(String message, String resourceName) {
        super(message);
        this.resourceName = resourceName;

    }

    public CategoryExistException(String message, Throwable cause, String resourceName) {
        super(message, cause);
        this.resourceName = resourceName;
    }



    public String getResourceName() {
        return resourceName;
    }

    public String getFieldName() {
        return fieldName;
    }

    public long getFieldValue() {
        return fieldValue;
    }


}
