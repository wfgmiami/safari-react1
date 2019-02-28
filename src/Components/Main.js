import React, {Component} from 'react';

import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
// import {removePost} from '../redux/actions';
import {Link} from 'react-router-dom';
import Single from './Single.js';

class Main extends Component {

  constructor(){
    super()
    this.state = {
      posts: [],
    }

    // this.removePhoto = this.removePhoto.bind(this);
    // this.addPhoto = this.addPhoto.bind(this);
  }

  componentDidMount(){
    this.props.startLoadingPost();
  }
  // removePhoto (postRemoved){
  //   this.setState( (state) => ({
  //     posts: state.posts.filter( post => post !== postRemoved )
  //   }))
  // }


  // addPhoto(postSubmitted){

  //   this.setState(state => ({
  //     posts: state.posts.concat(postSubmitted)
  //   }));
  // }

  render(){
    // console.log("Main.js: ", this.props)
    return (
      <div>
          <h1>
            <Link to="/">Photowall</Link>
          </h1>
          <Route exact path="/" render={() => (
            <div>

              <PhotoWall {...this.props} />
              {/* <PhotoWall onRemovePhoto={this.removePhoto} posts={this.state.posts}
              onNavigate = {this.navigate}/> */}
            </div>
          )}/>
          <Route path="/AddPhoto" render={ ({history}) => (
            <AddPhoto {...this.props} onHistory={history}/>
          )} />

          {/* <Route path="/AddPhoto" render={({history}) => (
            <AddPhoto onAddPhoto={(addedPost) => {
              this.addPhoto(addedPost)
              history.push("/")}}/>

          )}/> */}

          <Route path="/single/:id" render={ (params) => (
            <Single {...this.props} {...params} />
          )}/>

      </div>
    )
  }
}

// function SimulateFetchFromDatabase() {
//   return [
//     {
//       id: 0,
//       description: "Dog",
//       imageLink:"/dog.jpg"
//     },
//     {
//       id: 1,
//       description: "Pots",
//       imageLink:"/Pots.jpg"
//     },
//     {
//       id:2,
//       description: "Three Pots",
//       imageLink: "/Pots.jpg"
//     },
//     {
//       id:3,
//       description: "Wood Sticks",
//       imageLink: "/WoodSticks.jpg"
//     }
//   ]
// }

export default Main;

