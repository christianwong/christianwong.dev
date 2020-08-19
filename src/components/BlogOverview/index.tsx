import React from 'react';
import { Container } from './styles';

const BlogOverview: React.FC = () => {
  return (
    <Container>
      <h3>My Blog!</h3>
      <p>
        My blog is under development, as soon is ready, it will be available
        from this section.
      </p>
      <p>
        It will be published in this
{' '}
        <a href="https://christianwong.blog">link</a>.
      </p>
    </Container>
  );
};

export default BlogOverview;
