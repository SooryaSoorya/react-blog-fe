import React, { Component } from 'react';
import articles from './ArticleContent';

const ArticlePage = ({ match }) => {
  let name = match.params.name;
  const articleItem = articles.find(article => article.name === name);
  if (!articleItem) return <h1>Article not exist</h1>
  return (
    <>
      <h1>{articleItem.name}</h1>
      {articleItem.content.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
    </>

  )
}

export default ArticlePage;
