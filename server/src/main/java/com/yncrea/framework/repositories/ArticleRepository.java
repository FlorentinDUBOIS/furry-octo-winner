package com.yncrea.framework.repositories;

import com.yncrea.framework.entities.Article;
import org.springframework.data.repository.CrudRepository;

public interface ArticleRepository extends CrudRepository<Article, Integer> { }