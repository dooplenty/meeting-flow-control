<h3>Description</h3>

<h4>Current State</h4>

<p>App based on the MEAN stack but in this case M = MySQL. It queries the database for upcoming meetings and presents them to the user.</p>

<p>Database configuration is currently passed in as environment variables at the start of the app. See /app.js for variable names.</p>

<h4>Future</h4>

<p>Users will login to application via LDAP authentication. Once authenticated they will be taken to the main Meetings area where they will be presented with minimal details for each upcoming/in progress meetings.</p>

<p>From there users can click on a meeting to see a more detailed description as well as be presented with more options:</p>

<ul>
  <li>Subscribe to review
    <ul>
      <li>Only if review is in the future</li>
    <ul>
  </li>
  <li>Comment on review</li>
</ul>

<p>From the single meeting view users can view the list of topics associated with that meeting.</p>

<p>While viewers are viewing topics they can perform actions on those topics as well</p>

<ul>
  <li>Subscribe</li>
  <li>Comment</li>
  <li>Ask questions</li>
</ul>

<p>All times associated with in progress topics will be dynamic based on the start time and duration of the previous topic or just the start time if there is no preceeding topics.</p>

<p>Subscriptions will be sent out based on the expected start time of the upcoming topic subscribed to.</p>

<h3>Main Libraries</h3>

<ul>
  <li><a href='http://nodejs.org'>Node.js</a></li>
  <li><a href='http://expressjs.com'>Express</a></li>
  <li><a href='http://angularjs.org'>Angularjs</a></li>
  <li><a href='http://bookshelfjs.org'>Bookshelf.js</a></li>
</ul>
