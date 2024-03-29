
const Message = ({msg, bgColor}) => {
    let styles = {
        padding: "1rem",
        marginBottom: "1rem",
        testAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: bgColor,
    }
    return (
        <div style={styles}>
            <p>{msg}</p>
        </div>
    )
}
export default Message