![hair-experiment](https://i.imgur.com/AMLaTya.png?1)
<h1>Hair-Experiment</h1>
A small and beauty hair simulation made in HTML5.

This is a non-profit implementation. The character used to better illustrate the results belongs to the game A *Child of Light*.

<h2>How it's made?</h2>
Each strand of hair is a graph. The root have childrens nodes making a chain. In each animation frame a line is drawned between the nodes making a curve.
The simulation is started by the root node following the direction of the mouse (a vector os the last two mouse position). Then, each node moves a little controled by a speed variable in the direction to he's father. With this delay in movimentation is possible to make the moviment smoother and realistic.

<h2>Results</h2>
Several things can be done to make the result more realistic. The interesting thing to note is the beauty of the result obtained even without much polishing.

<h2>TO DO</h2>
It is planned to use some ideas to make hair movement more realistic in terms of physics.
Each hair's node can have a movement vector that can be accelerated or decelerated according to what's happening to his surrounding.
Gravity can be added for more realism (It can be a constant that influences the motion vectors of each node).
