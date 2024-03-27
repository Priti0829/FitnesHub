import React from 'react';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div style={{ marginTop: '20px', padding: '20px' }}>
      <div style={{ fontSize: '44px', fontWeight: 700, color: '#000', marginBottom: '33px' }}>
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', flexWrap: 'wrap', alignItems: 'center' }}>
        {exerciseVideos.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div style={{ marginLeft: '10px' }}>
              <div style={{ fontSize: '28px', fontWeight: 600, color: '#000' }}>
                {item.video.title}
              </div>
              <div style={{ fontSize: '14px', color: '#000' }}>
                {item.video.channelName}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
// import React from 'react'

// const ExerciseVideos = () => {
//   return (
//     <div>ExerciseVideos</div>
//   )
// }

// export default ExerciseVideos