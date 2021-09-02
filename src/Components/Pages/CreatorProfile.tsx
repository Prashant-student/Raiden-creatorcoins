import { Container } from '@material-ui/core'
import React from 'react'
import { AddAPhoto } from '@material-ui/icons'
import "./css/CreatorProfile.css"
import exGraph from '../../assets/images/exGraph.jpg'
import { width } from '@material-ui/system'

const CreatorProfile = () => {
    return (
        <Container className="MainContainer">
            <div className="DivGrid">
                <div className="DivGridChild1">
                    <p>Add Image</p>
                    <AddAPhoto />
                </div>
                <div className="DivGridChildCreatorProfile2">
                    <p>Current Price </p>
                </div>
            </div>
            <div className="DespGrid">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="DespGrid">
                <img  style={{
                    height: '35rem',
                    width: '50rem',
                    alignSelf: 'center',
                    
                }} src={exGraph} alt="" />


            </div>
        </Container>

    )
}

export default CreatorProfile
