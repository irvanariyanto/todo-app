import React, {Component, Fragment} from 'react'
import Post from "../../../component/Post/Post";
import axios from 'axios'
class BlogPost extends Component{
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            description: ''
        }
    }

    getPostAPI = () => {
        axios.get('http://localhost:8080/v1/todo')
            .then((res) => {
                this.setState({
                    post: res.data
                })
            })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:8080/v1/todo/${data}`).then((res) =>{
            this.getPostAPI();
        })
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail/${id}`)
    }

    componentDidMount() {
        this.getPostAPI();
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime()
        formBlogPostNew['id'] = timestamp.toString().substr(0, 4)
        formBlogPostNew[event.target.name] = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:8080/v1/todo', this.state.formBlogPost).then((res) => {
            console.log(res)
            this.getPostAPI()
        }, (err) => {
            console.log("error : ", err)
        })
    }

    handleSubmit = () => {
        this.postDataToAPI();
    }


    render() {
        return(
            <Fragment>
                <p>Blog Post</p>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" onChange={this.handleFormChange}/>
                    <label htmlFor="body-content">Blog Content</label>
                    <textarea name="description" id="body-content" cols="30" rows="10" onChange={this.handleFormChange}></textarea>
                    <button onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} goDetail={this.handleDetail}/>
                    })
                }

            </Fragment>
        )
    }
}

export default BlogPost