ASYNQUENCE

WATERFALL
Collects output from each step and passes it to the next

then function is polymorphic - it changes its behaviour based on what it returns.
Asyncquence: don't do polymorhpic, name functions based on what they do

So:

.seq = expecting a sequence back (a promise)

If you need to just print something out.. just use .val

So each method name does one specific thing. 

