import { NavigationItem } from './NavigationItem';
import { NotificationCard } from './NotificationCard';
import styles from './SidebarLayout.css';

const navigationItems = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/933ed33d38f99306f2b6f688b80cf8d308a57f6175f7957d8e7b54de0d6d2771?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e', text: 'Home', isActive: true },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c3dc081e6eb0d8769ad0e3c14d551a5a0aa803789da959a9d7aac61266a9f87f?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e', text: 'My Assets', isActive: false },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6e697b75b14105adc8cdb5a4a69b0a5c88e17478a27f4eefdd8a219780137b20?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e', text: 'Auctions', isActive: false },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/074b5cb950db78998387bcc0a321db61957f5060f1adfcfd4a79f609c1aa95d5?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e', text: 'Saved auctions', isActive: false },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/eedcaee116aa6f2e86e61b89c188ce92061f30187a1f7baa60b1eaeb5c936017?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e', text: 'Profile Setting', isActive: false },
];

export const SidebarLayout = () => {
  return (
    <nav className={styles.sidebarContainer}>
      <div className={styles.logoContainer}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a227a67fb1aa60ea4fcfdf701adff7cfa910ebdd82c2188f253364885db64408?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e"
          className={styles.logoImage}
          alt="Company Logo"
        />
        <div className={styles.brandText}>s8</div>
      </div>

      {navigationItems.map((item, index) => (
        <NavigationItem
          key={index}
          icon={item.icon}
          text={item.text}
          isActive={item.isActive}
        />
      ))}

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/823c509b7195f58954ec1ccf5442dcae94878859aeed5298f145f03d9ca1542a?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e"
        className={styles.divider}
        alt=""
      />

      <NotificationCard />
    </nav>
  );
};
