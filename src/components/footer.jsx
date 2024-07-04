const Footer = () => {
    return (
        <footer style={ container }>
            powered by
        </footer>
    );
}

export default Footer;

const container = {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e52526",
    minHeight: "70px",
    color: 'white'
};