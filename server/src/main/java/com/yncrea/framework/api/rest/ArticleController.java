package com.yncrea.framework.api.rest;


import com.yncrea.framework.entities.Article;
import com.yncrea.framework.services.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ArticleController  implements IController<Article, String> {

    @Autowired
    private ArticleService articleService;

    @Override
    @GetMapping("/api/article")
    public Iterable<Article> find() {
        return articleService.find();
    }

    @Override
    @PostMapping("/api/article")
    public Article create(@RequestBody Article article) {
        return articleService.create(article);
    }

    @Override
    @GetMapping("/api/article/{Id}")
    public Article findOne(@PathVariable(name = "Id") String Id) {
        return articleService.findOne(Id);
    }

    @Override
    @PutMapping("/api/article/{Id}")
    public Article update(@PathVariable(name = "Id") String Id, @RequestBody Article article) {
        return articleService.update(article);
    }

    @Override
    @DeleteMapping("/api/article/{Id}")
    public void delete(@PathVariable(name = "Id") String Id) {
        articleService.delete(Id);
    }
}
