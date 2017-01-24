package com.yncrea.framework.services;


import com.yncrea.framework.entities.Article;
import com.yncrea.framework.repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ArticleService implements IService<Article, Integer> {

    @Autowired
    private ArticleRepository articleRepository;

    @Transactional
    public Iterable<Article> find() {
        return articleRepository.findAll();
    }

    @Transactional
    public Article create(Article entity) {
        return articleRepository.save(entity);
    }

    @Transactional
    public Article findOne(Integer Id) {
        return articleRepository.findOne(Id);
    }

    @Transactional
    public Article update(Article entity) {
        return articleRepository.save(entity);
    }

    @Transactional
    public void delete(Integer Id) {
        articleRepository.delete(Id);
    }
}
