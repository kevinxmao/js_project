# Park It 🅿️

[Click here for live link](https://www.kevinxmao.com/js_project/#)

## 1. Background
Park It is a fun parking game that lets users control small race car on a full screen. The user's task is to park the car inside a randomly positioned blue parking spot in the shortest amount of time. There are floating stop signs which the user has to avoid and five chances are given. Each time the race car collides with a stop sign, one life is decreased. User has 1.5 second grace period at beginning of the game or restart of the game where the racecar is immune to stop sign collision.

## 2. Functionality & MVP

1. Racecar rendered on screen and user control
2. Stop signs move around at random initial launch angle and velocity
3. Apply phsyics to circle collisions with impulse calculated
4. Collision detection between a rotatable rectangle (racecar) and stop signs
5. Inclusion detection between the parking spot and rotated rectangle (racecar)
6. User loses one life at collision
7. Add timer to game and display best time at successful parking

## 3. Wireframe

Park It is a full screen game. Racecar is dynamically placed on the screen accoridng to screen size. The app includes a start button, a timer and display of remaining lives on the top left corner. A brief instruction is placed on top right corner. At either win or lose, a modal appears to show the game status.

![Wireframe](/wireframe.png)

## 4. Architecture and Technologies

- Javascript
- HTML Canvas
- Webpack

## 5. Implementation Timeline

- Day 1: Set up file and assets
- Day 2: Create game logic and user controls
- Day 3: Collision detection between various objects and game win/lose logic
- Day 4: Implement timer and display best time
- Day 5: Clean up code

## 6. Bonus features (Future Implementation)

1. Implement online multi-user playability
2. Store users' best time in light database
