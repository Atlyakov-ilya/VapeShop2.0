package com.atlyakovilya.vapeshop.entity;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name="t_news")
public class News implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "F_NEWS_ID")
    private Long newsId;
    @Column(name = "F_TITLE")
    private String title;
    @Column(name = "F_CONTENT")
    @Type(type = "text")
    private String content;
    @Column(name = "F_DATE")
    @Temporal(value = TemporalType.DATE)
    private Date date;
    @OneToOne(mappedBy = "news", cascade = CascadeType.ALL)
    private NewsFile newsFile;

    public News() { }

    public News(String title, String content, Date date, NewsFile newsFile) {
        this.title = title;
        this.content = content;
        this.date = date;
        this.newsFile = newsFile;
    }

    public Long getNewsId() {
        return newsId;
    }

    public void setNewsId(Long newsId) {
        this.newsId = newsId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public NewsFile getNewsFile() {
        return newsFile;
    }

    public void setNewsFile(NewsFile newsFile) {
        this.newsFile = newsFile;
    }
}
