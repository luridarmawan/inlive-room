'use client';

import { useMemo, useRef } from 'react';
import ConferenceScreen from '@/_features/room/components/conference-screen';
import type { InstanceStream } from '@/_shared/sdk/room/stream/stream-types';
import { useParticipantContext } from '@/_features/room/contexts/participant-context';
import styles from '@/_features/room/styles/conference.module.css';

const isMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth <= 600;
  }
};

export default function ConferenceParticipants() {
  const { streams } = useParticipantContext();
  const screenCount = useRef<number>(0);

  const { medias, screens } = useMemo(() => {
    const medias: InstanceStream[] = [];
    const screens: InstanceStream[] = [];

    for (const stream of streams) {
      if (stream.source === 'screen') {
        screens.push(stream);
      } else {
        medias.push(stream);
      }
    }

    return { medias, screens };
  }, [streams]);

  const hasScreen = useMemo(() => {
    return screens.length > 0;
  }, [screens]);

  const layout = (streams: InstanceStream[]) => {
    if (hasScreen) {
      return isMobile()
        ? {
            gridTemplateColumns: `repeat(${streams.length - 1}, 1fr)`,
          }
        : {
            gridTemplateRows: `repeat(${streams.length - 1}, 1fr)`,
          };
    }
  };

  const videoLayout = (hasScreen: boolean, source: string) => {
    if (hasScreen) {
      if (source === 'screen') {
        screenCount.current++;

        if (screenCount.current === 1) {
          return isMobile()
            ? {
                gridColumn: `1/span ${streams.length - 1}`,
              }
            : {
                gridRow: `1/span ${streams.length - 1}`,
              };
        }
        return {
          gridRow: `auto/auto`,
          gridColumn: `2/auto`,
          minHeight: 0,
          height: '100%',
        };
      }
    }
  };

  const renderVideo = (stream: InstanceStream) => {
    return (
      <div
        key={stream.id}
        className={`${
          hasScreen
            ? stream.source === 'screen'
              ? styles['presenting-screen']
              : styles['presenting-media']
            : styles['gallery-media']
        }`}
        style={videoLayout(hasScreen, stream.source)}
      >
        <ConferenceScreen stream={stream} />
      </div>
    );
  };

  return (
    <div
      className={`${
        styles[hasScreen ? 'presenting' : 'gallery']
      } row-start-1 w-full ${styles['media']}`}
      style={layout(screens)}
    >
      {screens ? screens.map(renderVideo) : null}
      {medias ? medias.map(renderVideo) : null}
    </div>
  );
}
