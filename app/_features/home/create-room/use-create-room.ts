import { createRoom } from '@/_features/room/modules/factory';
import { useNavigate } from '@/_shared/hooks/use-navigate';
import { Mixpanel } from '@/_shared/components/analytics/mixpanel';

export const useCreateRoom = () => {
  const { navigateTo } = useNavigate();

  const createRoomHandler = () => {
    createRoom()
      .then((room) => {
        if (!room.data.roomId) {
          throw new Error('Failed to create a room. Please try again later!');
        }

        Mixpanel.track('Create room', {
          roomId: room.data.roomId,
        });

        navigateTo(`/room/${room.data.roomId}`);
      })
      .catch((error) => {
        alert('Something went wrong. Please try again later! ');
        console.error(error);
      });
  };

  return { createRoom: createRoomHandler };
};