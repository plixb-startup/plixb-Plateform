package com.plixb.blog.service;

import com.plixb.blog.payload.LoginDto;
import com.plixb.blog.payload.RegisterDto;
import org.springframework.stereotype.Service;

@Service
public interface AuthService {
    String login(LoginDto loginDto);

    String register(RegisterDto registerDto);
}
