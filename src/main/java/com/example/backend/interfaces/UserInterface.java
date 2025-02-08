package com.example.backend.interfaces;

import com.example.backend.model.User;

import java.util.List;
import java.util.Optional;

public interface UserInterface {
    User createUser(User user);

    List<User> getAllUsers();

    Optional<User> getUserById(Long id);

    User updateUser(Long id, User userDetails);

    void deleteUser(Long id);
}
