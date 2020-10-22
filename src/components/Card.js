import React from 'react'
import CardInfo from'../components/CardInfo'
import Content from '../components/Content'


const Card= (props)=>{
    return(
        <div 
            className='d-inline-block g-card text-center' 
            onClick={(e)=>props.onClick(props.item)}>
            <p className='description text-center'>{props.item.title}</p>
            <img 
                className="g-card-image"
                src={props.item.imgSrc} 
            />
            {props.item.selected && <CardInfo 
                                        // title={props.item.title} 
                                        subtitle={props.item.subTitle}
                                        link={props.item.link}
                                        codelink={props.item.codelink}
                                    />}
        </div>
    )
}

export default Card