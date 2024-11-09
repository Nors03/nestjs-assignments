import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssignmentController } from './assignment/assignment.controller';
import { AssignmentService } from './assignment/assignment.service';
import { AssignmentModule } from './assignment/assignment.module';

@Module({
  imports: [AssignmentModule],
  controllers: [AppController, AssignmentController],
  providers: [AppService, AssignmentService],
})
export class AppModule {}
