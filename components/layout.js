import Header from "../layouts/headerArea"
import Footer from "../layouts/footer"

const Layouts = ({children}) => {
    const styles = {
        display: "flex",
        flexDirection: "row"
      };
    return (
        <>
        <Header></Header>
        <main style={styles}>
           <section style={{ width: "1024px" }}>{children}</section>      
        </main>
        <Footer></Footer>
        </>
    )
}
export default Layouts