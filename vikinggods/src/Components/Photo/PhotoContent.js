import React from 'react';
import styles from './PhotoContent.module.css';

const PhotoContent = ({ data }) => {
   
   const { data, comments } = data;

   return (
     <div className={styles.photo}>
     <div className={styles.img}>
            <img src={photo.src} alt={photo.title} />
         </div>
         <div className={styles.details}>
            <div>
               <p></p>
            </div>

         </div>
         </div>
  )
}

export default PhotoContent