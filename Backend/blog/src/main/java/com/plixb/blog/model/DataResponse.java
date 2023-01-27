package com.plixb.blog.model;

import lombok.Data;

@Data
public class DataResponse <T>{

    private T data;
    private String message;

    public DataResponse(T data) {
        this.data = data;
    }

    public DataResponse(String message) {
        this.data = null;
        this.message = message;
    }

}
