import React, { useEffect, useState } from 'react';
import { getStoryIds, getStory } from '../services/hnApi';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
    getStory(24077315).then((data) => console.log(data));
  }, []);
  //   getStoryIds();
  return `${JSON.stringify(storyIds)}`;
};
