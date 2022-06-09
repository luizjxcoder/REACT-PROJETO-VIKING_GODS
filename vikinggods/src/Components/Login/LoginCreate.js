import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';

const LoginCreate = () => {
   function handleSubmit(event) {
      event.preventDefault();
   }
  return (
     <section className='anmeFlet'>
        <h1 className='title'>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
        <Input/>
        <Button>Cadastrar</Button>

        </form>
     </section>
  )
}

export default LoginCreate;