package com.atlyakovilya.vapeshop.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Set;


@Entity
@Table(name="t_user")
public class User implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "F_USER_ID", nullable = false)
    private Long userId;
    @Column(name = "F_EMAIL", nullable = false)
    private String email;
    @Column(name = "F_PASSWORD", nullable = false)
    private String password;
    @Column(name = "F_FIRST_NAME")
    private String username;
    @Column(name = "F_LAST_NAME")
    private String lastName;
    @Column(name = "F_SUBSCRIBE_TO_NEWS_NAME")
    private Boolean subscribeToNews;
    @Column(name = "F_PERSONAL_DATA")
    private Boolean personalData;
    @ManyToMany
    @JoinTable(name="F_USER_ROLES", joinColumns = @JoinColumn(name="F_USER_ID")
    ,inverseJoinColumns = @JoinColumn(name="F_ROLE_ID"))
    private Set<Role> roles;

    public User() { }

    public User(String email, String password, String username, String lastName, Boolean subscribeToNews, Boolean personalData) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.lastName = lastName;
        this.subscribeToNews = subscribeToNews;
        this.personalData = personalData;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Boolean getSubscribeToNews() {
        return subscribeToNews;
    }

    public void setSubscribeToNews(Boolean subscribeToNews) {
        this.subscribeToNews = subscribeToNews;
    }

    public Boolean getPersonalData() {
        return personalData;
    }

    public void setPersonalData(Boolean personalData) {
        this.personalData = personalData;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
