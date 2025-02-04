// import React from 'react';
import styles from './SidebarLayout.css';

export const NotificationCard = () => {
  return (
    <div className={styles.notificationCard}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c747f16d648fe816e3d2d66c808473086ef100f816a34b852514c4f9a233fa1e?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e"
        className={styles.notificationBackground}
        alt=""
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/065872fdc61017b1868eeae8e62027ca5df712f654e65d3f9cf08dfadf20b40c?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e"
        className={styles.notificationIcon}
        alt=""
      />
      <div className={styles.notificationTitle}>Notifications</div>
      <div className={styles.notificationText}>
        You have 7 new notifications
      </div>
      <button className={styles.notificationButton}>View Notifications</button>
    </div>
  );
};