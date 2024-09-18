
import data from "./data"
import Header from "./components/Header/Header"
import SectionCard from "./components/SectionCard/SectionCard"

export default function App(){
    const countryData = data.map((item) => {
       return <SectionCard 
            key={item.title}
            {...item}
        />
    })
    
    return(
        <>
            <Header/ >
            <div className="container">
                {countryData}
            </div>
        </>
    )
}


