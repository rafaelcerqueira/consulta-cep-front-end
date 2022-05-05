import React from "react";
import { useForm } from "react-hook-form";
import Form from "./components/Form";
import Main from "./components/Main";


function App() {

  const {register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  }

  const buscarCep = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);

    fetch(`https://viacep.com.br/ws/${cep}/json/ `)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setValue('logradouro', data.logradouro);
      setValue('bairro', data.bairro);
      setValue('localidade', data.localidade);
      setValue('uf', data.uf);
      setFocus('uf');
    })
  }

  return (
    <Main>
      <h1>Consultar CEP</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          CEP:
          <input type="text" {...register("cep")} onBlur={buscarCep}/>
        </label>
        <label>
          Logradouro:
          <input type="text" {...register("logradouro")} />
        </label>
        <label>
          Bairro:
          <input type="text" {...register("bairro")} />
        </label>
        <label>
          Cidade:
          <input type="text" {...register("localidade")} />
        </label>
        <label>
          UF:
          <input type="text" {...register("uf")} />
        </label>
        <button>
          Pesquisar
        </button>
      </Form>
    </Main>
  );
}

export default App;
