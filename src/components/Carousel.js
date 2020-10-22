import React from 'react'
import form from '../images/form.png'
import github from '../images/github.jpg'
import musik from '../images/musik.png'
import quiz from '../images/quiz.jpg'
import Card from '../components/Card'
import  Container  from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'



class Carousel extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items:[
                {
                    id:0,
                    title:'Github',
                    subTitle:'view my stuff',
                    imgSrc:github,
                    link:'https://github.com/zsoltnyitrai',
                    codelink:'https://github.com/zsoltnyitrai',
                    selected:false
                },
                {
                    id:1,
                    title:'Musik Pad',
                    subTitle:'my first javascript project',
                    imgSrc:musik,
                    link:'https://zsoltnyitrai.github.io/music-pad/muski.html',
                    codelink:'https://github.com/zsoltnyitrai/music-pad',
                    selected:false 
                },
                {
                    id:2,
                    title:'A Form',
                    subTitle:'first Form',
                    imgSrc:form,
                    link:'https://zsoltnyitrai.github.io/FORMS/advanced-form.html',
                    codelink:'https://github.com/zsoltnyitrai/FORMS',
                    selected:false
                },
                {
                    id:3,
                    title:'Movie-Quizz App',
                    subTitle:'Quizz app build with react',
                    imgSrc:quiz,
                    link:'https://quiz-db708.web.app/',
                    codelink:'https://github.com/zsoltnyitrai/react-quizz-app',
                    selected:false
                }
            ]
        }
    }
    handleCardClick=(id,card)=>{
        let items=[...this.state.items]
        items[id].selected=items[id].selected? false:true
        items.forEach(item=>{
            if(item.id!==id){
                item.selected=false;
            }
        })
        this.setState({items})
    }

    makeItems=(items)=>{
        return items.map(item=>{
            return (
                <Card 
                    item={item}
                    onClick={e=>this.handleCardClick(item.id,e)}
                    key={item.id}    
                />
            )
        })
    }
    render(){
        return(
            <Container fluid={true}  >
                 {/* height adjust is for the footer so its not su up in the content */}
                <Row className='justify-content-center height-adjust '>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}
export default Carousel