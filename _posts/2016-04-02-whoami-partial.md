---
sitemap: false
layout: angular
title:  "whoami"
date:   2016-04-19
categories: partials musing
---
When it isn't exactly clear what it
means to begin at the beginning, often a little self-conscious meta-pondering
provides a useful segue into the material. 

(I say this from experience: it is how yours truly has vanquished many a disquisition.
It is how I am beginning right now, thank you very much.)

Alternately phrased, Auden's exhortation is incomplete:
"Look, look in the mirror, O look in your distress." The saner part always
ends up laughing at just how much odder your nose and face are than you usually imagine. I have
never won a laughing contest against myself. And that's a fine place from which to start 
any old disquisition.

{: .center}
![Camera Reflected in Author's Eye](/assets/eye.jpg)

Case in point: we remark on that hideously extravagant mosaic recapitulating itself
in the background (a variation on Sierpinski's carpet), wasting your browser's cycles and, 
should you wish to see the spectacle through, your time. Does it not capture the very notion
of beginning somewhere and ending nowhere, as any good ramble must?

Anyway, some commodious vicus of recirculation may bring us (past Eve and Adam's)
back, recursively, to the theme in more rigorous depth (perhaps when the iterations of the 
universe (or my mind) revisit this spot in a more poetic mood).

But for now, I wend my way more towards the theme of this inaugural entry, and away from my
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

Feel free to paste that into your browser console – it may
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
ES6 and optimized tail calls to revisit subjective existence as a recursive loop, 
[h/t Douglas Hofstadter](https://en.wikipedia.org/wiki/I_Am_a_Strange_Loop).)

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

Now that's what I call enjambment!(\n) One is almost put in mind of [A Commuter's Lament](http://www.nytimes.com/1997/10/12/nyregion/neighborhood-report-midtown-lament-of-commuter-in-8-parts.html), the
darkly crotchety poem gently flicking past NY metro-goers transferring from Port
Authority to Times Square. Perhaps "A Collegiate Lament," for my take.

(Here, incidentally, a JavaScript aficionado might stop and ask, "is it a TypeError (`undefined is not a function`),
is it a ReferenceError (`mindfulAcceptance is not defined`)?" For the sake of this poem, thankfully,
mindfulAcceptance is not defined.)

The above parenthetical raises the real crux of these two jocular micro-poems. Apart from their forced
half-jokes and clearly non-MLA syntax, both poems rely on the melding of their words with abstract computational structures
simple enough to (hopefully) be relevant and apparent to the lay reader. The first relies on mutual recursion,
the doom of the attendant infinite loop, and the common trope (to borrow the literary term) of renaming `this` to
something else. Poets like [deixis](https://en.wikipedia.org/wiki/Deixis), right?

The second is perhaps more pedantic in inviting the reader to run the code in their head: toLoveAgain is meant to throw
an error (suggested by the ensuing `catch` block, the playful suggestion of catching mono after this attempt). Simple enough,
but mindfulAcceptance is meant to throw an error that ends up uncaught. The poem reads without this imaginary run (this psycho-execution? Sounds grim.), but only some programmatic perusal reveals the structure entire.

Hm, so I've written two poems here that have crash-and-burn errors as their point – revealing? Perhaps. But that's to say
nothing of the perhaps more idyllic poems that trees and bloom filters and maybe the odd adjacency list might invite.

Call this a manifesto of [Wagnerian proportions](https://en.wikipedia.org/wiki/Gesamtkunstwerk), a dilettantish titillation of mental
structures as disparate as newlines and verse – a hint at the syncretic, rich tapestries of the inner (ignorant) 21st-century mind.
