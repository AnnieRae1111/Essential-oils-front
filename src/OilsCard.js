import { 
    Col, 
    CardColumns, 
    Card, 
    CardImg, 
    CardBody, 
    CardTitle, 
    CardSubtitle,
    CardText, 
    Row

}
from 'reactstrap'

const OilsCard = ({id, name, benefits, description, photo}) => {
    return (  
        <div className="oils-card-container">
            <Row xs="1" xl="2">
            <Col > 
        <CardColumns>
            <Card className="oils-card">
                <CardImg
                alt="Card image cap"
                src={photo}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    <strong>Name:{name}</strong> 
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                <strong>Benefits:{benefits}</strong> 
                </CardSubtitle>
                <CardText>
                    <strong>Aromatic Description:{description}</strong> 
                </CardText>
                </CardBody>
        </Card>
        </CardColumns>
        </Col>
        </Row>

        </div>
    );
}
 
export default OilsCard;