package com.yncrea.framework.api.rest;

public interface IController<T, U> {
    public Iterable<T> find();
    public T findOne(U Id);
}
