import supertest from 'supertest';
import app from '../index';

const request = supertest;

afterAll((done)=>{
   app.close(done);
});

describe('Health routes', ()=>{
   it('Should return 200 on /health and respond that the server is currently running with code 0', async () => {
      const res = await request(app)
         .get('/health')
         .send();
      expect(res.statusCode).toEqual(200);
      expect(res.body.running).toBeTruthy;
      expect(res.body.code).toBe(0);
   });
});