import React from 'react';
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


import './App.css';

class App extends React.Component{
  componentDidMount(){
    document.title = "Nyitrai Zsolt"
  }
  constructor(props){
    super(props)
    this.state={
      title:"Nyitrai Zsolt",
      headeLinks:[
        {title:'Home',path:'/'},
        {title:'About',path:'/about'},
        {title:'Contact',path:'/contact'}
      ],
      home:{
        title:'Welcome',
        subtitle:'To my Portfolio',
        text:'Check out my projects'
      },
      about:{
        title:'About Me'
      },
      contact:{
        title:'Contact Me'
      }
    }
  }
  render(){
  return(
    <Router>
      <Container className='p-0 body-background' fluid={true}>
        <Navbar  className='border-bottom' bg="dark" variant="dark" expand='md' >
          <Navbar.Brand style={{fontSize: 40}}>Nyitrai Zsolt</Navbar.Brand>

          <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/>
          <Navbar.Collapse id='navbar-toggle'>
            <Nav className='ml-auto' variant='dark' bg='dark'>
              <Link className='nav-link' to='/'>Home</Link>
              <Link className='nav-link' to='/about'>About</Link>
              <Link className='nav-link' to='/contact'>Contact</Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path='/' 
          exact render= {()=><HomePage 
          title={this.state.home.title} 
          subtitle={this.state.home.subtitle}
          text={this.state.home.text}
          />
        }/>
        <Route path='/About'
          exact render={()=><AboutPage
          title={this.state.about.title}
          />
        }/>  
        <Route path='/Contact'
          exact render={()=><ContactPage
          title={this.state.contact.title}
          />
        }/>  

        <Footer/>
      </Container>

    </Router>
  )
  }
}
export default App;
