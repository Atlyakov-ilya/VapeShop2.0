package com.atlyakovilya.vapeshop.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;


@Entity
@Table(name="t_role")
public class Role implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name="F_ROLE_ID")
    private Long roleId;

    @Column(name="F_ROLE_NAME")
    private String roleName;

    @ManyToMany(mappedBy = "roles")
    private Set<User> users;


    public Role() { }

    public Role(String roleName, Set<User> users) {
        this.roleName = roleName;
        this.users = users;
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }
}

