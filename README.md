# The Brew Buddy

## Description
The Brew Buddy is the ritualistic coffee drinker's morning companion. Using the Book feature, it provides users with a space to engage in a daily journaling exercise, centered around the period of time during which coffee is typically consumed. Users can create new journal entries and view previous ones, along with notes on how that day's coffee was made/tasted. 

The Buddy feature provides the indecisive or adventurous coffee drinker with a way to explore new recipes for brewing coffee, specifically using an AeroPress brewing device. A randomizer adjusts variables in each stage of the brewing process so that users can enjoy a different coffee recipe with every cup. There is also a shortcut to populating a new journal entry with the recipe generated. 

The Brew Buddy caters to coffee drinkers specifically as it aims to solve the problem of inconsistent mindfulness practice by associating it with a daily activity. The time during which coffee is typically made/consumed can be occupied with mindful thinking, and this tool provides a method for users to not only document those thoughts but to also help with breaking the anti-routine of making coffee the same every day.

## API

The Pexels API (https://www.pexels.com/api/) is used to provide a thumbnail image for each journal entry. 

## Running the App Locally

1. Clone the repository to your local machine: 
    `git clone git@github.com:kevncrypting/the-brew-buddy.git`

2. Navigate to the cloned repository: 
    `cd the-brew-buddy`

3. Install the dependencies: 
    `npm install`

4. Start the application: 
    `npm run preview`

The application will start on http://localhost:5173.

## Deployed Application
You can access the deployed application at: https://the-brew-buddy.onrender.com/

## Application Flow and Wireframes

![Wireframe](src/assets/wireframe.png)

The application has the following main screens:

- Book Screen: Shows a list of all journal entries, as well as a method to add a new journal entry. The subsequent screen displays a coffee-related thumbnail image pulled from the Pexels API (which can be regenerated if the user wants a different image), an area to document thoughts, and an area to talk about the morning's brew.

- Buddy Screen: Shows a recipe generator for brewing coffee using an AeroPress device. Users can repeatedly generate new random recipes, *planned feature: choosing to keep certain randomized values while regenerating others.*

- Bio Screen: Shows information about the project and its purpose.