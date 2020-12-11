# Express Note Taker
  ## Table of Contents
  - [Description](#description)
  - [Code Explanation](#code-explanation)
  - [Contact Me](#contact-me)

  ## Description
  This application uses an express server to write, save, and delete notes. The note data is saved and retrieved from a JSON file. The frontend and backend are connected via HTML and API routes.     
  

  ## Code Explanation
  The frontend of this application was already built and I built the backend and connected them. I installed and used express to set up a server. From there, I wrote HTML routes so that the user can access the index.html file first, then the notes.html when they are ready to record notes. I used module.exports to export the routes and then require them in the server.js file. Next was to set up the API routes. The GET route simply returns the JSON data to the user. The POST route collects the input from the user and stores it in a new note object. The object is pushed to the JSON data through the array method. Then the JSON data is returned to the user. The DELETE route finds the id of the note and if the id of the note is the same as the id of the note the user wants to delete, the splice method is used to remove the note from the array. Same as the HTML routes, I used module.exports to export the routes and then require them in the server.js file. 

  [homepage]('./public/assets/note-taker-home-page.png)
  [notes-list]('./public/assets/notes-list.png)
  [deleted-notes]('./public/assets/deleted-notes.png)
  
  
  ## Contact Me
  You can check out my GitHub profile at https://www.github.com/shannonquinn91 or email me at shannon.quinn91@gmail.com.
  