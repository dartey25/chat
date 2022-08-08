import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway(7080, {
  cors: true,
})
export class ChatGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('send_message')
  handleMessage(@MessageBody() message: any): void {
    this.server.emit('receive_message', message);
  }
}
