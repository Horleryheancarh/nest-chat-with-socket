import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from 'src/app.service';
import { AppGateway } from 'src/app/app.gateway';
import { Chat } from 'src/chat.entity';
import { DB_URL } from 'src/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      url: DB_URL,
      entities: [Chat],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Chat]),
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
