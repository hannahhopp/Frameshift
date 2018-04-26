const { expect } = require('chai');
const { db, Dream } = require('./index');
const Bluebird = require('bluebird');

describe('Dream model', () => {

  beforeEach(() => {
    return db.sync({ force: true });
  });

  afterEach(() => {
    return db.sync({ force: true });
  })

  describe('Dream data validations', () => {

    it('has default dream type STANDARD', async () => {
      await Dream.create({
        title: 'Default dream type test',
        dreamDate: new Date(),
        dream: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.`
      })
        .then(dream => {
          expect(dream.dreamType).to.equal('STANDARD');
        })
        .catch(err => console.error(err));
    });

  });
})
