import React from 'react';
import styles from '../../components/layout/layout.module.css';

const Layout = ({ children }) => {
  return <div className='view-container'>
    <div className='container'>
      <div className={styles.row + ' row'}>
        <div className={styles.left}>
          sidebar
        </div>
        <div className={styles.right}>
          {children}
        </div>
      </div>
    </div>
  </div>;
};

export default Layout;
