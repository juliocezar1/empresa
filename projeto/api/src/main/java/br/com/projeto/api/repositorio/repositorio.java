package br.com.projeto.api.repositorio;

import org.springframework.data.repository.CrudRepository;

import br.com.projeto.api.modelo.cliente;

public interface repositorio extends CrudRepository<cliente, Long> {

}
