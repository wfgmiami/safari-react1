import React, {Component} from 'react';

import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';

class Main extends Component {

  constructor(){
    super()
    this.state = {
      posts: [],
    }

    this.removePhoto = this.removePhoto.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
  }

  componentDidMount(){
    const data = SimulateFetchFromDatabase();
    this.setState({ posts: data })

  }

  componentDidUpdate(prevProps, prevState){

  }

  removePhoto (postRemoved){
    this.setState( (state) => ({
      posts: state.posts.filter( post => post !== postRemoved )
    }))
  }


  addPhoto(postSubmitted){
    console.log(postSubmitted)
    this.setState(state => ({
      posts: state.posts.concat(postSubmitted)
    }));
  }

  render(){

    return (
      <div>
          <Route exact path="/" render={() => (
            <div>
              <Title title={'Photowall'}/>
              <PhotoWall onRemovePhoto={this.removePhoto} posts={this.state.posts}
              onNavigate = {this.navigate}/>
            </div>
          )}/>

          <Route path="/AddPhoto" render={({history}) => (
            <AddPhoto onAddPhoto={(addedPost) => {
              this.addPhoto(addedPost)
              history.push("/")}}/>

          )}/>
      </div>
    )
  }
}

function SimulateFetchFromDatabase() {
  return [
    {
      id: 0,
      description: "Dog",
      imageLink:"/dog.jpg"
    },
    {
      id: 1,
      description: "Pots",
      imageLink:"/Pots.jpg"
    },
    {
      id:2,
      description: "Three Pots",
      imageLink: "/Pots.jpg"
    },
    {
      id:3,
      description: "Wood Sticks",
      imageLink: "/WoodSticks.jpg"
    }
  ]
}

export default Main;

