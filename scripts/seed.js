const { db, Dream, User } = require('../server/db');
const dreams = require('./dreams');
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

const seed = async () => {
  await db.sync({ force: true });
  console.log('db synced!');
  console.log('sentiment analysis...');
  const analyzedDreams = dreams.map(dream => {
    let analysis = sentiment.analyze(dream.dream);
    return {
      ...dream,
      ...analysis
    };
  });
  console.log('analysis complete!');

  await Promise.all(
    analyzedDreams.map(dream => {
      dream.imageUrl = `/${dream.dreamType.toLowerCase()}.jpg`;
      return Dream.create(dream);
    })
  );

  console.log(`seeded ${dreams.length} dreams`);
  console.log(`seeded successfully`);
}

seed()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
    process.exitCode = 1;
  })
  .then(() => {
    console.log(`closing db connection`);
    db.close();
    console.log(`db connection closed`);
  });

console.log(`seeding...`);
