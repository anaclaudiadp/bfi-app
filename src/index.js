import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//CSS
import './index.css';


// const newData = data.map((item) => {
//   console.log(item.summary);
//   console.log(item);
//   return (
//     <div>
//       <p>{item.summary}</p>
//       <br />
//       <button type="button"><a href={item.url}>Read more</a></button>
      
//     </div>
    
//   );
// });

// function ArticleList() {
//    return (
//     // <section className="articlelist">{newData}</section>
//   // //     <ArticleContent
//   // //       img={data.primary_image.url}
//   // //       title={data.title}
//   // //       summary={data.summary}
//   // //     />
      
    
//    );  
// }

function ArticleContent(props) {
  // return (
  //   <article className="articlecontent">
  //     <img src={props.img} alt='' />
  //     <h1>{props.title}</h1>
  //     <p>{props.summary}</p>
  //   </article>
  // );
}

ReactDOM.render(<App />, document.getElementById('root'));