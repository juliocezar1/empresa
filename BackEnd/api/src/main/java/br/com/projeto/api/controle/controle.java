package br.com.projeto.api.controle;

import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.api.modelo.cliente;
import br.com.projeto.api.repositorio.repositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "*")
public class controle {

    @Autowired
    private repositorio acao;

    @PostMapping("/")
    public cliente cadastrar(@RequestBody cliente c) {
        return acao.save(c);
    }

    @GetMapping("/")
    public Iterable<cliente> selecionar() {
        return acao.findAll();
    }

    @PutMapping("/")
    public cliente editar(@RequestBody cliente c) {
        return acao.save(c);

    }

    @DeleteMapping("/{id}")
    public void remover(@PathVariable long id) {
        acao.deleteById(id);
    }

}