import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { Book } from './book/book.entity';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5433,
      username: 'postgres',
      password: 'root',
      database: 'nestLibrary',
      entities: [Book, User],
      synchronize: true,
    }),
    BookModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
