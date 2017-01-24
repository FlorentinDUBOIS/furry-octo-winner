package com.yncrea.framework.api.rest;


import com.yncrea.framework.entities.Article;
import com.yncrea.framework.services.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ArticleController  implements IController<Article, Integer> {

    @Autowired
    private ArticleService articleService;

    @GetMapping("/api/article")
    public Iterable<Article> find() {
        return articleService.find();
    }

    @PostMapping("/api/article")
    public Article create(@RequestBody Article article) {
        return articleService.create(article);
    }

    @GetMapping("/api/article/{Id}")
    public Article findOne(@PathVariable(name = "Id") Integer Id) {
        return articleService.findOne(Id);
    }

    @PutMapping("/api/article/{Id}")
    public Article update(@PathVariable(name = "Id") Integer Id, @RequestBody Article article) {
        return articleService.update(article);
    }

    @DeleteMapping("/api/article/{Id}")
    public void delete(@PathVariable(name = "Id") Integer Id) {
        articleService.delete(Id);
    }
}
