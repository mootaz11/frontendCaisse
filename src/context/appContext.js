import globalContext from './globalContext';

export default function AppContext(props) {
    const [panier, setPanier] = useState(null)





return (
    <globalContext.Provider value={{
        panier:panier,
        setPanier:setPanier
        
    }}
    >
        {props.children}
    </globalContext.Provider>
)



}