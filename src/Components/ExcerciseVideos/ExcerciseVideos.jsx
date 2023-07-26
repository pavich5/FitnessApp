import React from 'react';
import './ExcerciseVideos.css'
const ExcerciseVideos = ({ exerciseVideos,name }) => {
  return (
    <div className='ExcerciseVideos'>
        <h1>Watch <span>{name}</span> exercise videos</h1>

        <div className="excerciseVideos">
        {exerciseVideos.slice(0,5).map((item, index) => (
        <a
          key={index}
          className="exercise-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer"
        >
          <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
          <div>
            <p>{item.video.title}</p>
            <p>{item.video.channelName}</p>
          </div>
        </a>
      ))}
        </div>

    </div>
  );
};

export default ExcerciseVideos;
