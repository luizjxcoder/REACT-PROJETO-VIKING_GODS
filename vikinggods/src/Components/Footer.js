import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Gods } from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Gods />
      <p>Viking Gods. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
