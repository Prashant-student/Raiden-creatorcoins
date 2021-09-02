import { Container } from '@material-ui/core'
import React from 'react'
import { AddAPhoto, Facebook } from '@material-ui/icons'
import TwitterIcon from '@material-ui/icons/Twitter';
import "./css/CreatorProfile.css"
import exGraph from '../../assets/images/exGraph.jpg'
import { width } from '@material-ui/system'
import Instagram from '@material-ui/icons/Instagram';
import YouTube from '@material-ui/icons/YouTube';

const CreatorProfileUserVisible = () => {
    return (
        <Container className="MainContainer">
            <div className="DivGrid">
                <div className="DivGridChild1">
                    <p> Image</p>
                    {/* <AddAPhoto /> */}
                </div>
                
                <div className="DivGrid2">
                <div className="DivGridChild21">
                    <p>Name</p>
                </div>
                <div className="DivGridChild22">
                    <p>Current Price </p>
                </div>
                </div>
            </div>
            <div className="DespGrid">
                <div >
                    <p>Followers</p>
                    <div className="iconParent">
                    <div className="icons">
                    <TwitterIcon />
                    <p>1k</p>
                    </div>
                    <div className="icons">
                    <Instagram />
                    <p>1k</p>
                    </div>
                    <div className="icons">
                    <Facebook />
                    <p>1k</p>
                    </div>
                    <div className="icons">
                    <YouTube />
                    <p>1k</p>
                    </div>
                    </div>
                    
                    


                </div>
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

export default CreatorProfileUserVisible;
