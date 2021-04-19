# DELETE THIS CONTENT

## Part 1
I've created a class "Interval" to produce range objects for pen indices. Viewable in solution.py

## Part 2
I've created a function "parse_input" that parses and validates pen range entries. Viewable in solution.py

## Part 3
I've created a function "interval_synth" to reduce overlapping pen numbers and itervals to the most efficient objects.  Viewable in solution.py

## Part 3b
The function runs in O(n^2) time as the list of page entries must be looped over and then the entries themselves must be looped over with regular expression to produce range objects. Space complexity is O(n)

## Unit Tests
I've created a series of unit tests "TestCases" to ensure proper function. Viewable in solution.py





You forgot the measure the most important reason to use a Set, the 0(1) lookup. has vs IndexOf. – Magnus Aug 29 '18 at 6:32 
@Magnus I didn't forget. The question asked "Specifically, when it comes to removing, adding and iterating" so I tested for those. But you are absolutely right that one of Sets' advantage over other collections is lookup time. It is so obvious that I don't even think we need to test for it. Although it could be fun to find out just how much faster they are. – snowfrogdev Aug 29 '18 at 11:09

used array because sets preserve insertion order.

couldn't log like a set because of deprecation

python 3.7 and newer dicts are ordered
