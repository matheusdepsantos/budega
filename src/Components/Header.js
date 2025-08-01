import Avatar from "./Avatar";
import Menu from "./Menu";

const styles = {
  header: {
    width: "100%",
    height: "53px",
    backgroundColor: "#158A8A",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  menuInput: {
    display: "flex",
    alignItems: "center",
  },

  image: {
    width: "103px",
    height: "33px",
    marginLeft: "26px",
  },

  input: {
    width: "305px",
    height: "30px",
    borderRadius: "3px",
    border: "none",
    marginLeft: "45px",
  },

  favoiriteAvatar: {
    display: "flex",
    alignItems: "center",
    color: "#ffffff"
  },

  favoritos: {
    margin: "16px 76px 16px 0px",
    fontSize: "14px",
  },

  iconBag: {
  },

  sacola: {
    fontSize: "14px",
  },
};

function Header() {
  return (
    <div style={styles.header}>
      <div style={styles.menuInput}>
        <Menu />
        <img src="../../logo.png" alt="" style={styles.image} />
        <input type="text" name="" id="" style={styles.input} />
      </div>
      <div style={styles.favoiriteAvatar}>
        <span style={styles.favoritos}>Favoritos</span>
        <span style={styles.iconBag} class="material-symbols-outlined">
          local_mall
        </span>
        <span style={styles.sacola}>Sacola</span>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
