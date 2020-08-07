import React, { useEffect, useState } from 'react';
import { getStoryIds, getStory } from '../services/hnApi';
import { Story } from '../components/Story';
export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
    getStory(24077315).then((data) => console.log(data));
  }, []);
  //   getStoryIds();
  return storyIds.map((storyId) => <Story key={storyId} storyId={storyId} />);
};
