import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Gods } from '../Assets/brasao.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Gods />
      <p>Viking Gods. Alguns direitos reservados | Criado por JXcoder development</p>
    </footer>
  );
};

export default Footer;
