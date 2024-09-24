import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';

describe('FlowersController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleMixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleMixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('flowers (GET)', () => {
    return request(app.getHttpServer())
      .get('/flowers')
      .expect(200)
      .expect([
        {
          id: 1,
          name: 'Rose',
          color: 'Red',
          price: 10,
          createdAt: '2024-09-22T17:13:37.803Z',
          updatedAt: '2024-09-22T17:13:37.803Z',
        },
        {
          id: 2,
          name: 'Lily',
          color: 'White',
          price: 12,
          createdAt: '2024-09-22T17:15:11.520Z',
          updatedAt: '2024-09-22T17:15:11.520Z',
        },
        {
          id: 3,
          name: 'Tulip',
          color: 'Yellow',
          price: 5,
          createdAt: '2024-09-22T17:15:23.818Z',
          updatedAt: '2024-09-22T17:15:23.818Z',
        },
      ]);
  });

  it('/flowers (POST)', () => {
    return request(app.getHttpServer())
      .post('/flowers')
      .send({ name: 'Sunflower', color: 'Yellow', price: 8 })
      .expect(201)
      .expect((response) => {
        return response.body.name === 'Sunflower';
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
