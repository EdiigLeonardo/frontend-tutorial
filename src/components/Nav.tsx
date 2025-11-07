import { Link } from "react-router-dom"

export default function NavBar() {
    const MainStyleSheet: React.CSSProperties = {
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 10, 
        gap: '3rem',
        backgroundColor: '#f4f4f4', 
        width: '100%',
        cursor: 'pointer'
    }

    const LinkStyleSheet: React.CSSProperties = {
        textDecoration: 'none',
        color: 'black',
        cursor: 'pointer'
    }

    const divStyleSheet: React.CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        gap: '3rem',
    }
    return(
        <>
            <h1>Edig's React Study</h1>
            <nav style={MainStyleSheet}>
                <div style={divStyleSheet}>
                    <span style={{color: 'black'}}>Gen by Trae.ai</span>
                    <Link to="/ia/useCounter" style={LinkStyleSheet}>useCounter</Link> |{" "}
                    <Link to="/ia/useCallback" style={LinkStyleSheet}>useCallback</Link> |{" "}
                    <Link to="/ia/useEffect" style={LinkStyleSheet}>useEffect</Link> |{" "}
                    <Link to="/ia/useMemo" style={LinkStyleSheet}>useMemo</Link> |{" "}
                    <Link to="/ia/useRef" style={LinkStyleSheet}>useRef</Link>
                </div>
            </nav>
        </>
    )
}