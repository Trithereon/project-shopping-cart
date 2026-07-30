import styles from "../styles/FooterLinkList.module.css";

function FooterLinkList({ listData }) {
  return (
    <div className={styles.footerLinkList}>
      <h2>{listData[0].listTitle}</h2>
      <ul>
        {/* Slice prevents rendering the first object in the array. */}
        {listData.slice(1).map((item) => {
          return (
            <li className={styles.link} key={item.title}>
              <a className={styles.link} href="#">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterLinkList;
