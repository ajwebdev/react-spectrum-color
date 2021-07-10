import React from 'react';

function PallateColor() {

    return (
        <>
            <Row>
                <Col>
                    <div className='table-row'>
                        <input id='bgcolor' type="color" value= {initialColor} onChange= { (event) => { console.log('called'); console.log(event.target.value)} } style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text'>Background Color</span>
                    </div>
                </Col>
                <Col>
                    <div className='table-row'>
                        <input type="color" style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text' >Background Color</span>
                    </div>
                </Col>
                <Col>
                    <div className='table-row'>
                        <input type="color" style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text'>Contact button color</span>
                    </div>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <div className='table-row'>
                        <input type="color" style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text' >Menu text color</span>
                    </div>
                </Col>
                <Col>
                    <div className='table-row'>
                        <input type="color" style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text'>Designation</span>
                    </div>
                </Col>
                <Col>
                    <div className='table-row'>
                        <input type="color" style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text'>Contact button text color</span>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default PallateColor;
