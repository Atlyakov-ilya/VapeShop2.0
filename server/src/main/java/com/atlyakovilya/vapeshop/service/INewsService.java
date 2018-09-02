package com.atlyakovilya.vapeshop.service;

import com.atlyakovilya.vapeshop.entity.News;

import java.util.List;

public interface INewsService {

    void saveNews(News news);

    List<News> getAllNews();

}
