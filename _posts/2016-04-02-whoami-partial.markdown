---
layout: angular
title:  "whoami"
date:   2016-04-02 23:02:34 -0400
categories: partials musing
---
When it isn't exactly clear what it
means to begin at the beginning, sometimes a little self-conscious meta-pondering
provides a useful, and if not, at least entertaining, segue into the material.

Alternately phrased: if you look into a mirror, you'll either "look, look in the mirror, 
O look in your distress," as Auden puts it, or you'll end up laughing at just how much
larger your nose is than you usually imagine. And that's a fine place from which to 
start a dissertation.

Case in point: we remark on that hideously extravagant carpet in the background
(Sierpinski's), wasting your browser's cycles and, should you wish to see the spectacle
through, your time.

Anyway, some commodious vicus of recirculation may bring us (past Eve and Adam's),
back, recursively, to the theme in more rigorous depth (perhaps when the iterations of the 
universe (or my mind) revisit this spot in a more poetic mood).

But for now, I wend my way more towards the theme of this entry, and away from my
rhapsodic musings -- towards JavaScript!

I begin with what I proffer as a poetic text – not in that it's successful
poetry, but in that it makes something more aesthetic than 
functional, imagistic than quotidian, out of a language that is mostly quotidian and 
functional (and you thought you were escaping a poetic mood!):

{% highlight javascript %}
function I() {}

I.prototype.am = function() {
  var self = this;
  return self.aStrangeLoop();
}

I.prototype.aStrangeLoop = function() {
  var i = this;
  return i.am();
}

var i = new I();
i.am(); // ;()am.i?
{% endhighlight %}

&#35;deep, is all I can say. Feel free to paste that into your browser console – it may
just be the pithiest phishing scheme a jag has ever come up with. (In fact, it should
blow your stack, as the kids say, almost immediately.)

No, the point is to look at this artistically. There's something quite expressive
about this maligned language – no, not that it's like C but it's got those terse
lambdas – but some angular(!) jazz going on with this prototype thing: there's a
prototype of me? I contain (`I` contains?) a strange looping function and an existential function? 
For that matter, it seems like everything here is a function... Dare I make this `I` ask *the* 
question...? I am, the self is this, it is, it loops, strangely it is.

And off I send my poor Frankenstein's monster, puttering away, a recapitulation of myself, 
making it ask itself what it is for an agonizing couple of microseconds before its universe's
thermodynamics fizz to a grinding halt.

How eschatological, how cosmic! Is there a poetry in this? Soi-disant, I think so.

(I could make the function a tad more well-behaved by throwing in a `setTimeout`, but
at that point I'd feel like I was treating `I` like a five-year-old. Let's wait till
ES6 and optimized tail calls to revisit subjective existence as a recursive loop, [h/t Douglas Hofstadter](https://en.wikipedia.org/wiki/I_Am_a_Strange_Loop).)

Let's try again, more whimsically, a variation:

{% highlight javascript %}
function I() {
  try {
    toLoveAgain()
  } catch (mono) {
    mindfulAcceptance()
  }
}
{% endhighlight %}

Now that's what I call enjambment! One is almost put in mind of [A Commuter's Lament](http://www.nytimes.com/1997/10/12/nyregion/neighborhood-report-midtown-lament-of-commuter-in-8-parts.html), the
darkly crotchety poem gently flicking past NY metro-goers transferring from Port
Authority to Times Square. Perhaps "A Collegiate Lament," for my take.

(Here, incidentally, a JavaScript aficionado might stop and ask, "is it a TypeError (`undefined is not a function`),
is it a ReferenceError (`mindfulAcceptance is not defined`)?" For the sake of this poem, thankfully,
mindfulAcceptance is not defined.)



