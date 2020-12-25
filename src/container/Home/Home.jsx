import React, {Fragment} from 'react'
import Product from "../pages/Product/Product"
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import YoutubeComp from "../pages/YoutubeComp/YoutubeComp";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";

class Home extends React.Component {
    render() {
        return(
            <Router>
                <Fragment>
                    <div>
                        <Link to="/" >Blog</Link>
                        <Link to="/product" >Product</Link>
                        <Link to="/lifecycle" >Lifecycle</Link>
                        <Link to="/youtube" >Youtube</Link>
                    </div>
                    <Route path="/" exact component={BlogPost}/>
                    <Route path="/detail/:id" component={DetailPost}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/lifecycle" component={LifeCycleComp}/>
                    <Route path="/youtube" component={YoutubeComp}/>
                </Fragment>
            </Router>
        )
    }
}

export default Home;