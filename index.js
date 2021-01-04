import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
          <ApprovalCard>
            <CommentDetail 
              author="Peter" 
              timeAgo="Today kl 10:00" 
              comment="Peter wrote" 
              bild={faker.image.image()}
            />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail 
              author="Nora" 
              timeAgo="Today kl 11:00" 
              comment="Nora sad well done" 
              bild={faker.image.image()}
            />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail
              author="Pierre"
              timeAgo="Today kl 00:00" 
              comment="HaHa" 
              bild={faker.image.image()}
            />
          </ApprovalCard>
        </div>
    );
};

   
ReactDOM.render(<App />, document.querySelector('#root'));
if (module.hot) {
    module.hot.accept();
   }
