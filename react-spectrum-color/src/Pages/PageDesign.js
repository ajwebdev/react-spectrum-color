import React, {useEffect,useState} from 'react';
import {Container, Card, Nav, Row, Col, Button, Navbar,Badge} from 'react-bootstrap';
import { SocialIcon} from 'react-social-icons'
import check from './avatar.png';
import $ from 'jquery';
import 'spectrum-colorpicker/spectrum';
import '../App.css'
import 'spectrum-colorpicker/spectrum.css';

function PageDesign() {
    const [initialColor, setbgColor] = useState( {
        bgcolor: '#ff0000',
        name: '#00ff00',
        designation: '#ffffff',
        contactButton: '#ffffff',
        contactButtonText: '#ff0000',
        menutxt: '#ffffff',
        getInButton: '#ff0000',
        getInButtonText: '#ffffff',
        webButton: '#ffffff',
        webButtonText : '#ff0000',
        phoneText: '#000000',
        profileCard: '#efaeae',
        profileDetailCard: '#efaeae',
        profileDetailText: '#ff0000',
        profileDetailButton: '#ff0000',
        profileDetailButtonText: '#ffffff',
        profileDetailAnchor: '#f7d981'

    });
    const [currentBade, setcurrentBadge] = useState({heading: true,sidebar: false,mainBody: false });
    useEffect(() => {
        $('#bgcolor,#name,#contactButton,#menutxt,#designation,#contactButtonText,#getInButton,#getInButtonText,#webButton,#webButtonText,#phoneText,#profileCard,#profileDetailCard,#profileDetailText,#profileDetailButton,#profileDetailButtonText,#profileDetailAnchor').spectrum({
            showPalette: true,
            showInput: true,
            showButtons: true,
            chooseText: 'Set color',
            clickoutFiresChange: false,
            palette: [
                ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
                ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
                ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
                ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
                ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
                ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
                ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
                ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
            ],
            move: function(color) {
                var selectedId = $('.sp-active')[0].previousElementSibling.id;
                initialColor[selectedId] = color.toHexString();
                setbgColor({...initialColor} );
            }
        });
    },[currentBade]);
return (
    <>
        <Card style={{padding: 15,borderRadius: 0,backgroundColor: '#e5e3e3'}}>
            <Container fluid style= {{ padding: 10}}>
                <Card style= {{padding: 20, borderRadius: 0}}>
                    <Row>
                        <Col>
                            <Badge className='badge-style' style = {{backgroundColor: currentBade.heading && 'rgb(0, 123, 255)', color:  currentBade.heading && '#fff'}} onClick = { ()=> { setcurrentBadge({ heading: true, sidebar: false, mainBody: false }); }}>Heading</Badge>
                        </Col>
                        <Col>
                            <Badge className='badge-style' style = {{backgroundColor: currentBade.sidebar && 'rgb(0, 123, 255)', color:  currentBade.sidebar && '#fff'}}  onClick = { ()=> { setcurrentBadge({ heading: false, sidebar: true, mainBody: false });console.log(currentBade); }}>Sidebar</Badge>
                        </Col>
                        <Col>
                            <Badge className='badge-style' style = {{backgroundColor: currentBade.mainBody && 'rgb(0, 123, 255)', color:  currentBade.mainBody && '#fff'}}  onClick = { ()=> { setcurrentBadge({ heading: false, sidebar: false, mainBody: true });console.log(currentBade); }}>Main body</Badge>
                        </Col>
                    </Row>
                    <br></br>
                    {
                        currentBade.heading && 
                        <>
                            <Row>
                                <Col>
                                    <div className='table-row'>
                                        <input id='bgcolor' type="color" value= { initialColor.bgcolor } onChange= { (event) => { console.log('called'); console.log(event.target.value)} } style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text'>Background Color</span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='table-row'>
                                        <input id="name" type="color" value= { initialColor.name } onChange = {event => { console.log('Name color changed')}} style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text' >Your Name</span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='table-row'>
                                        <input id="contactButton" type="color" value= { initialColor.contactButton } onChange = { event => console.log('Contact Button color changed')} style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text'>Contact button color</span>
                                    </div>
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col>
                                    <div className='table-row'>
                                        <input type="color" id="menutxt" value={ initialColor.menutxt } onChange={ event => console.log('Menu text color')} style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text' >Menu text color</span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='table-row'>
                                        <input id="designation" type="color" value={ initialColor.designation} onChange= { event => console.log('Designation color changed.')} style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text'>Designation</span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='table-row'>
                                        <input id="contactButtonText" type="color" value={ initialColor.contactButtonText} onChange={ event=> console.log('ContactButton Text color changed.')} style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text'>Contact button text color</span>
                                    </div>
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        currentBade.sidebar && 
                        <>
                            <Row>
                                <Col>
                                    <div className='table-row'>
                                        <input id='getInButton' type="color" value={ initialColor.getInButton} onChange= {event=> console.log('Get In Touch button color changes')} style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text'>Get In Touch button color</span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='table-row'>
                                        <input id="webButton" type="color" value={ initialColor.webButton} onChange= {event=> console.log('Website button color changes')} style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text' >Website button color</span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='table-row'>
                                        <input id="phoneText" type="color" value = { initialColor.phoneText} onChange = { event=> console.log('Phone Text color changed.')} style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text'>Phone # color</span>
                                    </div>
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col>
                                    <div className='table-row'>
                                        <input id="getInButtonText" type="color" value= {initialColor.getInButtonText} onChange={ event=> console.log('Get In button Text color changed')} style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text' >Get In Touch text color</span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='table-row'>
                                        <input id="webButtonText" type="color" value= {initialColor.webButtonText} onChange= { event=>  console.log('Website Button text color changed.')} style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text'>Website button text color</span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='table-row'>
                                        <input id="profileCard" type="color" value= { initialColor.profileCard } onChange= { event=> console.log('Profile card color changed.')} style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text'>Sidebar color</span>
                                    </div>
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        currentBade.mainBody && 
                        <>
                            <Row>
                                <Col>
                                    <div className='table-row'>
                                        <input id='profileDetailCard' value={ initialColor.profileDetailCard} onChange= { event=> console.log('Profile Detail card color changed.')} type="color" style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text'>Profile Background color</span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='table-row'>
                                        <input id="profileDetailButton" value= { initialColor.profileDetailButton} onChange = { event=> console.log('Profile Detail card button changed.')} type="color" style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text' >Profile button color</span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='table-row'>
                                        <input id="profileDetailAnchor" value = { initialColor.profileDetailAnchor } onChange = { event=> console.log('Profile Detail Anchor color changed.')} type="color" style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text'>Hyperlink color</span>
                                    </div>
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col>
                                    <div className='table-row'>
                                        <input id="profileDetailText" value= { initialColor.profileDetailText } onChange= { event=> console.log('Profile Detail Card Text changed.')} type="color" style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text' >Profile text color</span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='table-row'>
                                        <input id="profileDetailButtonText" value = { initialColor.profileDetailButtonText } onChange= { event=> console.log('Profile Detail Button Text changed.')} type="color" style={{height: 35}}/>&nbsp;<span className='table-cell color-pallete-text'>profile button text color</span>
                                    </div>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                        </>
                    }
                    <br></br>
                    <Navbar variant= {'dark'} expand='lg' style ={{padding: 20, backgroundColor: initialColor.bgcolor}}>
                        <Navbar.Brand>
                            <img alt='user-picture' className= 'img-circle' src= {check} style= {{borderRadius: 25}} width="50" height="50"></img>
                            <div className='float-right' style={{marginTop: 7,marginLeft: 7}}>
                                <span style={{fontSize: 25,fontWeight:`bold`,display: `block`,lineHeight: `20px`, color: initialColor.name}}>Your Name</span>
                                <span className='align-initial' style={{fontSize: 14,display: `block`,color: initialColor.designation}}>UI Developer</span>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Button style={{marginRight: 10, backgroundColor: initialColor.contactButton,borderRadius: 0, border:`none`, color: initialColor.contactButtonText}} size='lg'>Contact me</Button>
                                <Nav.Link style={{color: initialColor.menutxt}}>
                                    Home
                                </Nav.Link>
                                <Nav.Link style={{color: initialColor.menutxt}}>
                                    Get in Touch
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Card style= {{padding: 15}}>
                        <Row>
                            <Col sm={8}>
                                <br></br>
                                <h4 className='align-initial'>There are many variation on Passages</h4>
                                <p className='align-initial'>
                                <a href="#" style={ {color: initialColor.profileDetailAnchor} }>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p className='align-initial'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <div className="card" style={ { padding: 20,color: initialColor.profileDetailText,backgroundColor: initialColor.profileDetailCard,borderRadius: 0}}>
                                    <div className="row no-gutters">
                                        <div className="col-auto">
                                            <img src={check} className="img-fluid" width="250" alt="" />
                                        </div>
                                        <div className="col" style={{paddingLeft: 10}}>
                                            <div className="card-block px-2">
                                                <h4 className="card-title align-initial" style= {{ fontWeight:`bold`}}>Contrary to popular belief</h4>
                                                <p className="card-text align-initial" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more</p>
                                                <Button style= {{borderRadius: 25,backgroundColor: initialColor.profileDetailButton,color: initialColor.profileDetailButtonText,borderColor: initialColor.profileDetailButton}} size="lg" block>Send it To Me!</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <Card className='align-initial' style= {{ padding: 20, marginRight: 10, backgroundColor: initialColor.profileCard,borderRadius: 0}}>
                                    <Card.Img src={check} />
                                    <Card.Text>
                                        Your Name
                                    </Card.Text>
                                    <Card.Text>
                                        Company Name
                                    </Card.Text>
                                    <Card.Text>
                                        Designation
                                    </Card.Text>
                                    <h5 style= {{ color: initialColor.phoneText}}>123-234-1122</h5>
                                    <Button size="lg" block style= {{backgroundColor: initialColor.getInButton, color: initialColor.getInButtonText,borderColor: initialColor.getInButton}}>Get in Touch</Button>
                                    <Button size="lg" block style={{backgroundColor: initialColor.webButton, color: initialColor.webButtonText,borderColor: initialColor.webButton}}>Visit website</Button>
                                    <div style= {{padding: 5, textAlign: `center`}}>
                                        <SocialIcon network="facebook" fgColor="#fff" style={{margin: '10px 5px'}}></SocialIcon>
                                        <SocialIcon network="twitter" fgColor="#fff" style={{margin: '10px 5px'}}></SocialIcon>
                                        <SocialIcon network="linkedin" fgColor="#fff" style={{margin: '10px 5px'}}></SocialIcon>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </Card>
            </Container>
        </Card>
    </>
)
}
export default PageDesign