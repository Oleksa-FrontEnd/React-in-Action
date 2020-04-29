// import React from "react";

// import React, {Component} from 'react';
// import {render} from 'react-dom';
// import PropTypes from 'prop-types';


// const node = document.getElementById("root");
// class Post extends Component {
//     render() {
//         return React.createElement('div', 
//             {
//                 className: 'post'
//             },
//             React.createElement(
//                 'h2',
//                 {
//                     className: 'postAuthor',
//                     id: this.props.id
//                 },
//                 this.props.user,
//                 React.createElement(
//                     'span',
//                     {
//                         className: 'postBody'
//                     },
//                     this.props.content            
//                 )
//             )    
//         );  
//     }
// }

// Post.propsTypes = {
//     user: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired,
// }

// const App = React.createElement(post, {
//     id: 1,
//     content: 'said: This is a Props',
//     user: 'Mark'
// });    
        
//     render(App, node);

// export default Hello;