import "../assets/css/Sidebar.css"

export default function Sidebar({ children}) {
const logo = "https://us.123rf.com/450wm/butenkov/butenkov2103/butenkov210300044/180573886-logotipo-vectorial-de-piezas-de-autom%C3%B3viles.jpg?ver=6"

    return (
        <>
            <label class="hamburger-menu">
            <input type="checkbox" />
            </label>

            <aside class="sidebar">
                <nav>
                    <div>This</div>
                    <div>Is</div>
                    <div>The</div>
                    <div>Sidebar</div>
                </nav>
            </aside>
        </>
    )
}