package com.yncrea.framework.services;

public interface IService<T, U> {
    public Iterable<T> find();
    public T findOne(U Id);
}
