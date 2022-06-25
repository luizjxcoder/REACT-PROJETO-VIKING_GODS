import React from 'react';
import styles from './UserPhotoPost.module.css';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';
//TODO import Head from '../Helper/Head';

const UserPhotoPost = () => {
  const nome = useForm();
  const god = useForm('text');
  const representacao = useForm('text');
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('god', god.value);
    formData.append('representacao', representacao.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }   

// [x]preview das postagens
  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      {/* <Head title="Poste sua foto" /> */}
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="God" type="text" name="god" {...god} />
        <Input label="Representação" type="text" name="representacao" {...representacao} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
