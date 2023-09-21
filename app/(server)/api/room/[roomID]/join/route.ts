import { roomRoutesHandler } from '../../../../_features/room/routes';
import { apiResponse } from '../../../../_shared/types';
import { isError } from 'lodash-es';
import { NextResponse } from 'next/server';

export async function GET(
  _: Request,
  { params }: { params: { roomID: string } }
) {
  const roomID = params.roomID;
  try {
    const existingRoom = await roomRoutesHandler.joinRoomHandler(roomID);
    console.log(existingRoom);
    const response: apiResponse = {
      code: 200,
      message: 'Room found',
      data: existingRoom,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    if (!isError(error)) {
      const response: apiResponse = {
        code: 500,
        message: 'an error has occured on our side please try again later',
      };

      return NextResponse.json(response, { status: 500 });
    }

    const response: apiResponse = {
      code: 500,
      message: error.message,
    };

    return NextResponse.json(response, { status: 500 });
  }
}
