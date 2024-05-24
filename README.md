# simpleNodeWebsite

This project involves setting up a basic web server using Node.js. The server hosts a website with multiple pages, each accessible through specific routes. The structure includes the following HTML files: index.html, about.html, contact-me.html, and 404.html.

## Directory Structure
Create a project directory containing:

index.html – The main landing page.
about.html – Information about the project or the team.
contact-me.html – A page to contact the developers.
404.html – A custom page for handling not found errors.
Additionally, an index.js file is included to set up the Node.js server.

## Server Functionality
The server is configured to:

Serve index.html at the root URL localhost:8080.
Display about.html when navigating to localhost:8080/about.
Show contact-me.html at localhost:8080/contact-me.
Return 404.html for any undefined routes.
This setup ensures that users can navigate through the site efficiently, with clear paths and appropriate feedback when a page is not available.