const styles = {
  card: {
    boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
    height: "185px",
    width: "162px",
    borderRadius: "10px",
  },

  nameProduto: {
    fontSize: "12px",
  },

  iconAvaliacao:{
    width: "4px",
    height: "4px",
    borderRadius: "50%",
    backgroundColor: "black"

  },
};

function Card() {
  return (
    <div style={styles.card}>
      <img src="../../geladeira.png" alt="" />
      <h1 style={styles.nameProduto}>Geladeira</h1>
      <div style={styles.iconAvaliacao}></div>
      <span>R$ 3.599</span>
      <span>10x de R$ 250</span>
      <span class="material-symbols-outlined">favorite</span>
    </div>
  );
}

export default Card;
