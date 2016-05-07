---
sitemap: false
layout: angular
title:  "sqrrt"
date:   2016-05-04
categories: partials musing
image: /assets/rapidly-exploring-random-tree.png
width: 1240
height: 1240
---
Rooting through three-dimensional, or rather, metric space, the rapidly exploring random tree (RRT) iteratively, 
(arguably artfully) draws targeted routes to randomly generated coordinates, thereby arriving at thorough, 
comprehensive consideration of configurations.

(Consonance is Jonathan's fancy.)

There's something almost disconcerting about [Jason Davies' take on RRTs](https://www.jasondavies.com/rrt/).
Look long enough and the mesh seems organically to pop and unfurl, formicate, and crawl. The only reasonable
thing to do, of course, is to replicate and transmogrify.

Straightforward replication is dull, but constructive. As I'm not visualizing anything, except possible escape routes
through a blacked-out, soulless flatland, I decided to ignore the 
[common wisdom](http://www.scribblelive.com/blog/2012/04/04/rainbow-color-scales/) that 
[rainbows are harmful](http://bl.ocks.org/mbostock/3290752), and encode distance from the starting point as the particular 
path segment's hue.

<div id="rrt2d" role='img' class="square" title="2D rapidly exploring random tree"></div>

The gist is as follows:

```
rrt = Tree(seed)

newNode = randomSample()
nearestNode = rrt.nearestNode(newNode)
rrt.connect(nearestNode, newNode)

```

Thanks to Davies' original, we get the notion of not actually connecting `nearestNode` to `newNode`, but 
rather marginally stepping towards it (refreshing our lovely trigonometry while we do so). This happens to be
key, I think, in giving the structure a more organic shape. Otherwise you end up with something more 
Kandinsky-esque, more like pick-up sticks than a venous, radical growth.

(A smart, determined fellow at this point asks, "How do you calculate the nearestNode in sublinear time?"
To this I respond, "I don't. (Have at your k-d/R/R* trees!)")

A more interesting exercise for the nonce is to generalize this to three dimensions! (An opportunity to play 
with threes.js not to be passed up!)

<div id="rrt3d" role='img' class="square" title="3D rapidly exploring random tree"></div>

Some interesting variations (formerly known as bugs) arose during my creation of this. So as to avoid firing
up any more rendering contexts and melting less doughty devices, I describe them here:

Calculate your distance erroneously, forgetting to account for z coordinates, and you end up with a 
remarkably flat structure more or less coplanar with the X-Y plane. It grows, but just up-down-left-right –
not in and out. It's like the 2D version above, but with a touch of topology. 
 
More interesting is when you do the above (fail at Euclidean geometry) and also go in and drop Davies' approach 
of stepping gradually towards points. You follow the more classic RRT approach of actually connecting the nearest
node all the way to the random point you just popped out.

You end up with something that looks like it's...looking at you. Like Harold of the Purple Crayon finally
got the 72-box of Crayolas, and really likes centrioles and...tie-dye? Eh, let's do a picture:

{: .center}
![Erroneous Distance Calculation on RRT](/assets/rrt-erroneous-distance.png)

It's like how [Quentin Blake](https://en.wikipedia.org/wiki/The_Twits#/media/File:The_Twits_first_edition.jpg) draws hair!

(When you don't fully connect nodes, why does the tree only grow up-down-left-right? By ignoring the 
Z coordinate, I pick the "nearest" point as squashed down along the Z-axis, onto the X-Y plane. 
("Projections," these are also known as). So I end up with points pushing and pulling the tree along the Z axis. 
Stuck between a rock and a hard place, you move along the plane in which you're sandwiched, right?
#StatsExplanationsThatDon'tPassMuster)

Variation #2: just for the heck of it, skew the range of one of the coordinates, and you end up
with something that looks miraculously like a tree. Well, a tree starring in Lucy in the Sky with Diamonds.

{: .center}
![Skewed RRT looks like Rainbow Tree](/assets/rrt-tree.png)

Random exploration is a dangerous world, friends. Natural selection by adroitness with Euclidean formulas
and trigonometry and bears, oh my!

Now, how much more exciting were the rainbows?

{% if page.categories contains 'partials' %}
<span load-js='//cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min.js'></span>
<span load-js='/js/rrt2.js'></span>
<span load-js='//cdnjs.cloudflare.com/ajax/libs/three.js/r76/three.min.js'></span>
<span load-js='/js/rrt3.js'></span>
{% endif %}

