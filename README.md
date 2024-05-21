# Assignment 1 

## Details
Team Builder Website!

For the first assignment, you’ll be creating your own team builder website. This should provide you with a gentle introduction to the three technologies that were covered during the workshop (HTML, CSS, JS).

We’re expecting the following:

1. An HTML file that loads a CSS file and a JS file

2. A navbar (should have functioning links to at least a home page (the main page where your items are listed), and an about page (brief information about yourself, the project, etc.))

3. A form with multiple inputs, to take in a:
  - Member name
  - Description of member
  - Member age
  - Image of member (image can come from a URL) as well as a button to add the member to a list, and a button to clear the inputs in the form.

4. A JSON string that holds initial members (should be prefilled with a name, description, age and image url, for when the site loads … and you can parse it into a JS object).

5. A list (likely unordered), made up of member cards that contain the member info (it should be updated with a new card whenever you click the add button in your form).

6. A button to delete all the cards.

7. Sufficient styling (showing some effort to upgrade the site from basic HTML), which may include things like:

  - Text color
  - Background color
  - Different positioning
  - Sizing (width, height), padding, margins
  - Etc.

8. Site should be responsive, and can handle shrinking the web browser or viewing with the device emulator in Chrome (expecting a flexbox if appropriate or media queries or at least appropriate sizing).

9. Something cool and extra! This is wide open for you to explore, and try to push your knowledge and boundaries. For example:

  - individual buttons for each card that will allow you to delete them (a button with an X or that says delete)
  - animate the cards in or out of the list when you add or delete them (using CSS animations and transitions)
  - additional form elements that show up in the cards (e.g. power/skill/favorite thing, etc.)
  - sorts, filters or search
    
As described in the individual assignment rubric, your code will need to meet these requirements and be functional, up to perhaps a few minor glitches in tricky cases. Note that functionality includes both user-visible and console-visible issues.

It’s up to you! We’re hoping that you’ll use the above requirements as a guide, but that you’ll let your imagination take over, and build something unique and interesting!

You should be ready to demo this to a TA during your second week lab, and should be ready to answer questions about it, as well as explain in detail what you’ve completed. You should also be ready to answer general questions about the lecture.

HAVE FUN!!!

## Reflection
As someone who was basically new to CSS, I took quite a bit of time experimenting and exploring different css attributes to figure out the styling, which felt kind of tedious at times. 
Eventually, I got the hang of it, but I still definitely need to learn CSS in more depth. Doing this assignment was a good practical exercise that helped me develop a better understanding 
of how html, css and javascript are integrated together to create webpages. Although it ended up taking longer than expected, it was a good learning experience overall.

## Areas for Improvement
There were a number of things I would've liked to improve/implement for this assignment:
- Maintain the same maximum size for all member cards (I tried applying the same styling to the cards as the memberForm, but it didn't work out...I suspect it may have something to do with the image size)
- Make the form fields disappear after hitting the "Add member" button to provide a visual confirmation of adding a new member with the info that was just submitted, rather than only being able
  to manually clear all the inputs
- Ideally, there would be a delete button for every member card that allows deletion of any member (this was trickier than I thought to implement) rather than having to type in the name of the member to delete
- Incorporating error handling (e.g., an alert message telling the user to enter the member name if left blank)
- Having data persistence would have been a useful feature (i.e., member cards are not lost when switching from one page to another)
- The styling could be more interesting, it just looks a bit basic
