import React from 'react';
import PageTitle from './PageTitle';

export default function PageHeading(props){

    return(
        <div className="page-heading-container ">
            <PageTitle title= {props.title}/>
            <p className="page-heading-paragraph">Discover the best products at unbeatable prices.</p>
        </div> 
    );
}
    