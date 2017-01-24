package com.yncrea.framework.services;


import com.yncrea.framework.entities.Article;
import com.yncrea.framework.repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ArticleService implements IService<Article, String> {

    @Autowired
    private ArticleRepository articleRepository;

    @Override
    @Transactional
    public Iterable<Article> find() {
        return articleRepository.findAll();
    }

    @Override
    @Transactional
    public Article create(Article entity) {
        return articleRepository.save(entity);
    }

    @Override
    @Transactional
    public Article findOne(String Id) {
        return articleRepository.findOne(Id);
    }

    @Override
    @Transactional
    public Article update(Article entity) {
        return articleRepository.save(entity);
    }

    @Override
    @Transactional
    public void delete(String Id) {
        articleRepository.delete(Id);
    }
}
