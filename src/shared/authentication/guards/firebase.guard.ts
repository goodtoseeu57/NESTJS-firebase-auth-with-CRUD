import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseGuard implements CanActivate {
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = await context.switchToHttp().getRequest();
    const user = await admin.auth().verifyIdToken(request.headers.authorization);
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
