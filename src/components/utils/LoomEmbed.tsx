import React, { useState } from 'react';

interface LoomEmbedProps {

  id: string;
  
  /**
   * Loom 视频的会话 ID（可选）
   */
  sid?: string;
  
  /**
   * 视频容器的宽高比
   * 默认为 16:9 (56.25%)
   */
  aspectRatio?: string;
  
  /**
   * 是否自动播放视频
   */
  autoplay?: boolean;
  
  /**
   * 是否隐藏控制栏
   */
  hideControls?: boolean;
  
  muted?: boolean;
  
  loop?: boolean;

  className?: string;
}

const LoomEmbed: React.FC<LoomEmbedProps> = ({ 
  id, 
  sid, 
  aspectRatio = '56.25%',
  autoplay = false,
  hideControls = false,
  muted = false,
  loop = false,
  className = '',
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  // 构建完整的 URL 和参数
  let embedUrl = `https://www.loom.com/embed/${id}`;
  const params = new URLSearchParams();
  
  if (sid) params.append('sid', sid);
  if (hideControls) params.append('hide_controls', '1');
  if (autoplay) params.append('autoplay', '1');
  if (muted) params.append('muted', '1');
  if (loop) params.append('loop', '1');
  
  const queryString = params.toString();
  if (queryString) {
    embedUrl += `?${queryString}`;
  }
  
  return (
    <div 
      className={className}
      style={{ 
        position: 'relative', 
        paddingBottom: aspectRatio, 
        height: 0,
        backgroundColor: '#f6f6f6',
        borderRadius: '4px',
        overflow: 'hidden'
      }}
    >
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div>加载中...</div>
        </div>
      )}
      
      {hasError && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#e53e3e'
        }}>
          <div>视频加载失败</div>
        </div>
      )}
      
      <iframe 
        src={embedUrl}
        allowFullScreen 
        title={`Loom video ${id}`}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          borderRadius: '4px',
          border: 'none'
        }}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      ></iframe>
    </div>
  );
};

export default LoomEmbed;