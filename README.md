## FEATURES ##

* HOME PAGE
>> Not signed in
  - Masthead with logo, login, sign up buttons
  - About under the masthead
>> Signed in
  - Masthead turns into navbar with a Profile, Logout, Create New Dream button
  - Under nav bar is a gallery with a filter for show all public dreams, or only dreams from friends

* USERS
>> Public/Private settings
>> Friends
>> Profile page
  Has:
  - Profile picture
  - Mood wheel
  - Friends list
  - Settings button
  - Dream gallery
  - If this profile page is not your own, then there should be an add/remove friend button somewhere
  - Dream count by category? LD, Standard, Nightmare, Vivid

* DREAMS
>> Form
  - Simple, has a title, date, and dream text
>> Create dream backgrounds based on words in the dream
  - Have several pregenerated images, create classes that determine the opacity and color in CSS?
>> Word clouds based on all dreams from a user
  - There is definitely a library that can do this for me
>> Mood wheel based on all dreams from a user
  - Probably something that can do this for me
>> At the bottom of the dream is a small blurb about the dreamer (like a blog or article post)
>> Within the dream, have clickable words that go to a random other user's dream that contains the same word
>> On either side of the dream, back/forward buttons that go through the user's dream history chronologically

## PRIORITIES ##
>> Dream gallery with background generator and sentiment analysis
- Sentiment analysis: sentiment node package? google-cloud-prediction-cli?
- Image generator: Probably start with some pre-made images, combine with varying opacities and encode new jpeg file?...
  - Maybe JIMP? Yeah... cool. It has a bunch of functionality and I can edit premade images!
- Anime-js is pretty. <-- FLUFF -->
- Found my transcribed dreams! Now to make a database...
  1. Create backend routes
  2. Frontend routes (gallery, single dream, create dream form)
  3. Gallery of dreams by end of today

## TO DOS ##
>> Dream dates
- Want to give option to change the date the dream was had.


