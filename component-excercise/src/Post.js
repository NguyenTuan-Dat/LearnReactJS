import React from 'react';

class Post extends React.Component {
    render() {
        if (this.props.in == "main") {
            return <div class="mainPost">
                <Image class="imageMainPost" linkImage={this.props.postContent.linkImage} />
                <div class="contentMainPost">
                    <Title class="titleMainPost" title={this.props.postContent.title} />
                    <Description class="descriptionMainPost" description={this.props.postContent.description} />
                </div>
            </div >
        }
        return null;
    }
}

function Title(props) {
    return <p class={props.class}> {props.title}</ p>
}

function Image(props) {
    return <img src={props.linkImage} class={props.class}></img>
}

function Description(props) {
    return <p class={props.class}>{props.description}</p>
}

export default Post;