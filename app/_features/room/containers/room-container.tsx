'use client';

import ClientContainer from '@/_features/room/containers/client-container';
import CookieContainer from '@/_features/room/containers/cookie-container';
import ViewContainer from '@/_features/room/containers/view-container';

export default function RoomContainer({
  roomId,
  origin,
  host,
}: {
  roomId: string;
  origin: string;
  host: boolean;
}) {
  return (
    <ClientContainer roomId={roomId}>
      {({ clientId }) => (
        <CookieContainer>
          <ViewContainer
            roomId={roomId}
            clientId={clientId}
            host={host}
            origin={origin}
          />
        </CookieContainer>
      )}
    </ClientContainer>
  );
}