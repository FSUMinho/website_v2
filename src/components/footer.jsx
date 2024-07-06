const Footer = () => {
    return (
        <footer style={ container }>
            powered by
        </footer>
    );
}

export default Footer;

const container = {
    marginTop: "20vh",
    width: '100%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e52516",
    minHeight: "70px",
    color: 'white'
};