type VideoBannerProps = {
  frameTitle: string;
  videoId: string;
};

function VideoBanner({ frameTitle, videoId }: VideoBannerProps) {
  return (
    <div className="video-banner__root">
      <iframe
        title={frameTitle}
        style={{ width: '100%', height: '100%' }}
        src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}

export default VideoBanner;
