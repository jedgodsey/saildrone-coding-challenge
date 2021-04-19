# SAILDRONE CODING CHALLENGE

## The Sets
I've implemented my own version of Sets in both JS and Python.  To run these files, download or clone this repository and navigate to the folder.

--to run the nodejs version:
$node Set.js

--to run the Python3 version:
$Python3 set.py

## Testing
Both files incorporate fairly comprehensive testing, examining proper instantiation of the object and its proper functionality.

## Let's Talk About Sets
A set is an iterable object in multiple languages that holds unique values in a one-dimensional format.  It is mutable, like an Array, but duplicate values will never be created upon instantiation or added later.  It can hold a large number of datatypes, which vary across languages, and certain other issues vary as well (see below).  In terms of performance, it is generaly inferior to an array with one important exception: it has 0(1) lookup time, whereas an array is 0(n) for lookup.  If you'd like speedy access to unique values, a Set is your man.

## What About MY Sets?
I tried to model Sets as best I could with the tools available to these two languages.  In both cases, I chose to use an Array underneath rather than an Object or Dictionary for a couple of reasons. In JavaScript, Sets are technically unordered, but maintain insertion order for iteration.  Since ES6, objects in JavaScript maintain a hybrid order, using insertion order for string keys and ascending order for numbered keys.  Using an object in this case would mean decreased functionality, so I went with an array.  In Python, all Sets are totally unordered.  However, since version 3.7, all dictionaries are ordered. Of course Lists are ordered as well.  Since there literally aren't tools available in the current version of python to submit my created Set to random order, I just chose a List because it seemed easier.

Any readers should feel free to message me if they'd like to discuss the great or horrible choices I've made with this repository.
