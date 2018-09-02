package com.atlyakovilya.vapeshop.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="t_news_file")
public class NewsFile implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "F_NEWS_ID", nullable = false)
    private Integer newsId;
    @Column(name = "F_FILE_NAME")
    private String fileName;
    @Column(name = "F_LOCATION")
    private String location;
    @OneToOne
    @PrimaryKeyJoinColumn
    private News news;

    public NewsFile() { }

    public NewsFile(String fileName, String location, News news) {
        this.fileName = fileName;
        this.location = location;
        this.news = news;
    }

    public Integer getNewsId() {
        return newsId;
    }

    public void setNewsId(Integer newsId) {
        this.newsId = newsId;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public News getNews() {
        return news;
    }

    public void setNews(News news) {
        this.news = news;
    }
}
