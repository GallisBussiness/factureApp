import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AuthMiddleware } from './auth/auth.middleware';
import { ClientModule } from './client/client.module';
import { ProduitsModule } from './produits/produits.module';
import { FactureModule } from './facture/facture.module';
import { UniteModule } from './unite/unite.module';
import { VenteDetailModule } from './vente-detail/vente-detail.module';
import { FactureAchatModule } from './facture-achat/facture-achat.module';
import { FournisseurModule } from './fournisseur/fournisseur.module';
import { FactureVenteModule } from './facture-vente/facture-vente.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGODB_URL'),
        autoCreate: true,
      }),
      inject: [ConfigService],
      
    }),
    JwtModule.registerAsync({
      useFactory: async (config: ConfigService) => {
        return {
          secret: config.get('JWT_SECRET'),
          signOptions: { expiresIn: '24h' },
        };
      },
      inject: [ConfigService],
    }),
    EventEmitterModule.forRoot(),
    UserModule,
    ClientModule,
    ProduitsModule,
    FactureModule,
    UniteModule,
    VenteDetailModule,
    FactureAchatModule,
    FournisseurModule,
    FactureVenteModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: 'user/login', method: RequestMethod.POST })
      .forRoutes('*');
  }
}
