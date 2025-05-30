import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

const Comments = () => {
  return (
    <DiscussionEmbed
      shortname="music-notes"
      config={{
        language: 'es_ES',
      }}
    />
  );
};

export default Comments;
