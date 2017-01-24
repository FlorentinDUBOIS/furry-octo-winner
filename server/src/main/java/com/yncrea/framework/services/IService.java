package com.yncrea.framework.services;

public interface IService<T, U> {
    public Iterable<T> find();
    public T create(T entity);
    public T findOne(U Id);
    public T update(T entity);
    public void delete(U Id);
}
