oz
==

Utilities for applying Wizard of Oz technique on HTML prototypes.

What's this
-----------

The Wizad of Oz is a technique for simulating events when prototyping.
Events such as receiving a call, or approaching your destination require the system to act proactivelly.
sinceprogramming this logic may be hard, sometimes it is easier to make a human t trigger the event and fake the interaction.

oz.js is a simple script that will ping periodically a URL for status information.
When the status changes, the page is automatically updated with the new status as the URL hash.
That is, if index.html gets "call_from_joe" as a response, the browser will go to index.html#call_from_joe

For the server part you can write your own code or even use Dropbox and modify the hosted file with a text editor.

How to use
----------

Add to your HTML the following code:

    <script src="../jquery.js"></script>
    <script src="../oz.js" data-remote="oz.json" data-delay="6000"></script>

The first line adds the jquery library which is a dependency for Oz.
The second line, loads oz.js and defines two parameters:
- data-remote: the URL that the page will be sending requests to.
- data-delay: time (in milliseconds) until the next request to the server.


You can see an example at the example folder.


oz.js can be used in conjunction with the [showcase template for pencil](https://github.com/pauginer/pencil-showcase-template) which uses the hash part of the URL to
identify the different pages in the prototype.
