const { expect } = require('chai');
const request = require('supertest');
const {
  db,
  Dream,
  STANDARD,
  VIVID,
  LUCID,
  NIGHTMARE
} = require('../../db');
const app = require('../../app');

describe('Dream routes', () => {
  beforeEach(async () => {
    await db.sync({ force: true });
    await Dream.create({
      title: 'All fields given',
      dreamType: NIGHTMARE,
      dream: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.

      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.

      Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam.`
    });
  });

  describe('/api/dreams/', () => {
    it('GET all dreams', async () => {
      await request(app)
        .get('/api/dreams')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.equal(1);
        });
    });

    it('GET dreams by id', async () => {
      await request(app)
        .get('/api/dreams/1')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.title).to.equal('All fields given');
        });
    });

    it('POST creates a new dream', async () => {
      const dream = {
        title: 'A new dream for me',
        dream: 'This dream was created for testing.'
      };
      await request(app)
        .post('/api/dreams/')
        .send(dream)
        .then(res => {
          expect(res.body.title).to.equal(dream.title);
          expect(res.body.dream).to.equal(dream.dream);
          expect(res.body.dreamType).to.equal(STANDARD);
        });
    });

    it('PUT edits a dream by id', async () => {
      const dream = 'This dream has been edited';
      const title = 'Edited dream title';
      await request(app)
        .put('/api/dreams/1')
        .send({
          dream,
          title,
          dreamType: NIGHTMARE
        })
        .then(res => {
          expect(res.body.title).to.equal(title);
          expect(res.body.dream).to.equal(dream);
          expect(res.body.id).to.equal(1);
        });
    })
  });

});
