export const api = {
  baseUrl: 'https://hub.inlive.app',
  version: 'v1',
};

export const webrtc = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302',
    },
    {
      urls: 'turn:turn.inlive.app:3478',
      username: 'inlive',
      credential: 'inlivesdkturn',
    },
    {
      urls: 'stun:turn.inlive.app:3478',
    },
  ],
};