package com.yncrea.framework.api.rest;

public interface IController<T, U> {
    public Iterable<T> find();
    public T create(T entity);
    public T findOne(U Id);
    public T update(U Id, T entity);
    public void delete(U Id);
}
