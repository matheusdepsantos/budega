import Menu from "./Menu";

const styles = {
  header: {
    width: "100%",
    height: "53px",
    backgroundColor: "#158A8A",
  },
};

function Header() {
  return (
    <div style={styles.header}>
      <Menu />
    </div>
  );
}

export default Header;
