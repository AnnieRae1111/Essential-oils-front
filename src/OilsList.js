import axios from 'axios'
import { useState, useEffect } from 'react'
import OilsCard from './OilsCard'
import { Container, Row } from 'reactstrap'

const OilsList = ({oils}) => {
    console.log(oils)

    return (  
        <>
        <Container>
            <div className="oils-list-container">
                {oils.map((oil)=> {
                    return(
                        <OilsCard key={oil.id} 
                        id={oil}
                        name={oil.name} 
                        benefits={oil.benefits}
                        description={oil.aromatic_description}
                        photo={oil.photo_url}
                        />
                    )
                })}
            </div>
        </Container>
        </>
    );
}
 
export default OilsList;