package com.atlyakovilya.vapeshop.service.impl;

import com.atlyakovilya.vapeshop.entity.News;
import com.atlyakovilya.vapeshop.repodsitory.INewsRepository;
import com.atlyakovilya.vapeshop.service.INewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsServiceImpl implements INewsService {

    @Autowired
    INewsRepository newsRepository;

    @Override
    public void saveNews(News news) {
        newsRepository.save(news);
    }

    @Override
    public List<News> getAllNews() {
        return newsRepository.findAll();
    }
}
