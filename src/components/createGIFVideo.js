import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import NavStyle from '../styles/navbar'
import FormControl from '@material-ui/core/FormControl';
import Home from './home'
import RecordScreen from './recordScreen'
import ImageToGIF from './imgToGIF';
import VideoToGIF from './videoToGIF';



export default class CreateGIFVideo extends Component {
    constructor(props){
        super(props)
        this.state= {
            image:null,
            goBack:false,
            username:this.props.username,
            recordScreen:false,
            videoToGIF:false,
            imageToGIF :false,
        }
    }
    onChangeHandler=event=>{
        this.setState({image:event.target.files[0]})
        console.log(event.target.files[0])
    
    }
    
 
    render() {
        if(this.state.goBack){
           return  <Home/>
        }
        if(this.state.recordScreen){
            return <RecordScreen/>
        }
        if(this.state.imageToGIF){
            return <ImageToGIF/>
        }
        if(this.state.videoToGIF){
            return <VideoToGIF/>
        }
        else{
        return (
            <React.Fragment>
            <NavStyle username={this.state.username} />
                <Box mx="auto" pt={15} pl={85} >
                <FormControl>
                {/* <Button  style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        border: 0,
                        borderRadius: 3,
                        color: 'white',
                        height: 48,
                        padding: '0 30px', }} >
                        {/* <input
                    accept="image/*"
                    id="uploadImage"
                    multiple
                    type="file"
                    display="upload"
                    onChange={this.onChangeHandler}/>
                </Button><br/><br/>  */}
                    <Button   style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        border: 0,
                        borderRadius: 3,
                        color: 'white',
                        height: 48,
                        padding: '0 30px' }} component="label" 
                        onClick= {()=>{this.setState({imageToGIF:true})}}>
                        Image to GIF  
                    </Button><br /> <br /> 
                    <Button style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        border: 0,
                        borderRadius: 3,
                        color: 'white',
                        height: 48,
                        padding: '0 30px'}} onClick={() => { this.setState({ videoToGIF:true }) }}>      Video to GIF  
                    </Button> <br /><br />
                    <Button style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        border: 0,
                        borderRadius: 3,
                        color: 'white',
                        height: 48,
                        padding: '0 30px'}} onClick={()=>{this.setState({recordScreen:true})}}>Record screen </Button><br /><br />
                   </FormControl>
                </Box>
                <Box mx="auto" pl={89}>
                <Button   style={{
                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        border: 0,
                        borderRadius: 3,
                        color: 'white',
                        height: 48,
                        padding: '0 30px',
                    }} onClick={() => { this.setState({ goBack:true }) }}>Home</Button>
                </Box>
                </React.Fragment>               
           
        );
    }
    }
}
