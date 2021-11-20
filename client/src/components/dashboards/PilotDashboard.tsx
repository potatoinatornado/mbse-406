import React, {useState} from "react";
import {Button, Card} from "react-bootstrap";
import {Plane, planes} from "../../pages/RepairingPlanes";

const PilotDashboard = () => {
    // placeholder initial value
    const [plane] = useState<Plane>(planes[0])

    return (
        <>
            Hello Pilot!
            <br/><br/>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://iheartcraftythings.com/wp-content/uploads/2021/06/Airplane-7.jpg" />
                <Card.Body>
                    <Card.Title>Repairs for the {plane.aircraft}</Card.Title>
                    <Card.Text>
                        Repairs
                        {!plane.inRepair ? " have finished. You may board on it now.":
                            ` are still ongoing. ${plane.eta}`}
                    </Card.Text>
                    <Button variant="primary">More info</Button>
                </Card.Body>
            </Card>



        </>
    )
}

export default PilotDashboard;