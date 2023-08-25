# Knights-Travails

![Screenshot of the App Overview](/src/assets/screenshots/Knights_Travails_Showcase.png)

[View DEMO Here!]()

> [!NOTE]
> This project is best viewed on a desktop. It is not suited for mobile view.

## Project Description

Find the shortest path between two squares travelled by a knight! 

I initially tried a binary search tree (BST) approach that:
1. Listed all the knight's possible moves from the start position. 
2. Find shortest path by using breadth-first search (BFS) to find the end position.

This approach led to numerous nested recursive functions to manage and did not yield much success.

I then used the graph data-structure approach created by [tylphe](https://github.com/TYLPHE/knights-travails) which used depth-first search (DFS). Surprisingly, this approach used more concise code and worked incredibly!

Overall, this was a great learning experience for applying data structures and algorithms to solve problems.

Technologies Used:
- Webpack
- JavaScript
- CSS and SASS

Notable Coding Techniques Used:
- Data Structures and Algorithms
- ES6 Modules
- JavaScript Factory Functions
- JavaScript Module Pattern
- JavaScript EventListeners

## How to Run Project Locally

To run this project on your own computer, please fork the repository, then run the following commands in your command line:
```
npm install
npm start
```

Otherwise, please check out the [DEMO!](https://tommy128works.github.io/Weather-App/)

## How to Use the Project

Click the "PLACE KNIGHT" button or "PLACE END" button to decide where to place the respective positions.

Alternatively, you can click the "RANDOM" buttons to randomize the placement of each respective piece.

Afterwards, click the "START" button to find the shortest path!

![Screenshot of primary user interface](/src/assets/screenshots/Knights_Travails_Buttons.png)


## Credits

[This project](https://www.theodinproject.com/lessons/javascript-knights-travails) is from The Odin Project's [Full Stack JavaScript](https://www.theodinproject.com/paths/full-stack-javascript) course.