const styles = {
  banner: {
    backgroundImage: "url(../../banner.png)",
    position: "relative",
    backgroundSize: "100% 100%",
    width: "100%",
    height: "242px",
    backgroundRepeat: "no-repeat",
  },

  bannerTitle: {
    position: "absolute",
    right: "117px",
    top: "109px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
  },

  textConfira: {
    fontSize: "20px",
  },

  textNewsletter: {
    fontSize: "44px",
  },

  iconBanner: {
    width: "133px",
    height: "25px",
    borderRadius: "18px",
    background: "#138080",
  },
};

function Banner() {
  return (
    <>
      <div style={styles.banner}>
        {/* <img src="../../banner.png" alt="" /> */}
        <div style={styles.bannerTitle}>
          <span style={styles.textConfira}>Confira nossa</span>
          <span style={styles.textNewsletter}>Newsletter</span>
          <div style={styles.iconBanner}></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
