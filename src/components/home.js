import axios from "axios";
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreateGIFVideo from "./createGIFVideo";
import NavStyle from '../styles/navbar'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default class home extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            videos: [],
            images: [],
            error: "",
            mycollection: false,
            createGIFVideo: false,
            goBack:false

        }
    }
    async fetchDetails(username) {
        console.log("fetchDetails-username", username);

        axios.get("http://localhost:8000/", { withCredentials: true }).then(res => {
            console.log("fetchDetails", res.data);

            this.setState({ username: res.data.username, videos: res.data.videos, images: res.data.images })
            console.log(res.data)
        }).catch(error => {
            if (error.response) {
                this.setState({ error: error.response.data.message, username: "" });
            } else {
                this.setState({ error: error.message, username: "" });
            }
        });
    }
    sso() {
        return axios
            .get("http://localhost:8000/", { withCredentials: true })
            .then(response => {
                console.log("sso", response.data);
                let username = String(response.data.username);
                username = username.toLowerCase();
                console.log(username);

                this.setState({
                    ...this.state,
                    username: username,
                    error: ""
                });

            })
            .catch(error => {
                if (error.response) {
                    this.setState({ error: error.response.data.message, username: "" });
                } else {
                    this.setState({ error: error.message, username: "" });
                }
            });
    }
    componentDidMount() {
        this.fetchDetails(this.state.username);
        if (!this.state.username === "") {
            this.fetchDetails(this.state.username).then(_ => console.log('did mount'))
        }


    }


    dispImage=(img)=>{
        return <img src = {img}/>
    }
    render() {

  
        if (this.state.username === "")
            return false
        console.log("in render", this.state.images);

        if (this.state.mycollection) {
            return <React.Fragment>
                <NavStyle username={this.state.username} />
                {/* <Body mycollection={this.state.mycollection} images ={this.state.images} /> */}
                {this.state.images.map(img =>{return this.dispImage(img)})}

            </React.Fragment>
        }
        else if(this.state.createGIFVideo){
            return <React.Fragment>
            <NavStyle username={this.state.username} />
            <CreateGIFVideo/>
            </React.Fragment>

        }
        // else if (this.state.createGIFVideo) {
        //     return <React.Fragment>
        //         <NavStyle username={this.state.username} />
        //         {this.state.videos.map((image) => {
        //             return (
        //                 // <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">
        //                 //     <Grid item xs={12} sm={6} md={4} style={{ float: "left" }}>
        //                 //         <Card style={{ maxWidth: 250, float: "left" }}>
        //                 //             <CardActionArea>
        //                 //                 <CardMedia
        //                 //                     component="img"
        //                 //                     alt="Contemplative Reptile"
        //                 //                     height="140"
        //                 //                     image={"../../" + image}
        //                 //                     title="Contemplative Reptile"
        //                 //                 />
        //                 //             </CardActionArea>
        //                 //         </Card>
        //                 //     </Grid>
        //                 // </Grid>
        //             )
        //         })}
            //       <Box mx="auto" pt={10} pl={78}>
            //     <Button style={{
            //             background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            //             border: 0,
            //             borderRadius: 3,
            //             color: 'white',
            //             height: 48,
            //             padding: '0 30px',
            //         }}
            //             onClick={() => { this.setState({ mycollection:false }) }}>Home</Button>
            //              </Box>
            // </React.Fragment>
        // }
        else {
            return (
                <React.Fragment>
                    <NavStyle username={this.state.username} />

                    <Box mx="auto" bgcolor="background.paper" pt={40} pl={75}>
                        <Button style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }} onClick={() => { this.setState({ mycollection: true }) }}>My Collection  </Button><br /><br />
                        <Button style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }} onClick={() => { this.setState({ createGIFVideo: true }) }}> Create a new GIF/video</Button>
                    </Box>
                </React.Fragment>
            )
        }

    }
}
function Hook() {
    const useStyles = makeStyles({
        root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
        },
    });
    const classes = useStyles();
    return classes.root;

}
