import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hnApi';

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <>
      <a href={story.url}>
        <p>{story.title}</p>
      </a>
      <p>
        By: {story.by} - {story.time}
      </p>
    </>
  ) : null;
};
