import React, { Component } from 'react';
import Axios from "axios"
export default class ImageToGIF extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        // this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        // this.uploadFiles = this.uploadFiles.bind(this)
    }
    state = {
        selectedFile: null
    }

  
    onClickHandler = (event) => {
        event.preventDefault()
        console.log("onclick",this.state);
        
        const data = new FormData()
        for(let x = 0; x<this.state.selectedFile.length; x++) {
            data.append('IMG', this.state.selectedFile[x])
        }
        // data.append("file",this.state.selectedFile,this.state.selectedFile.name)
        Axios.post("http://localhost:8000/uploadimages",data,{ withCredentials: true },{

        }).then(res=>{
            console.log("onClick than",res.statusText);
            
        })
    }
    onChangeHandler=event=>{
        let x = event.target.files  
        console.log("file",x)
        this.setState({
            selectedFile:x,   
        }, () => {console.log(this.state,"onchange handelr");})
        
        
    
    }

    render() {
        return (
            <React.Fragment>
            <form  encType="multipart/form-data" method="POST">
                Select images: <input type="file" name="myFiles" accept="image/*"  onChange={this.onChangeHandler} multiple />
                    <button type="button" value="Upload your files" onClick={this.onClickHandler}>upload</button>
            </form>
            </React.Fragment>

           )
    }
}