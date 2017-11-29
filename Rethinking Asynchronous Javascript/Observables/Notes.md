



We don't want producers and consumers in the same spot. We want to seperate concerns.


OBSERVABLES:
RxJS (Reactive Extension)


An obsevable is kind of like a chain of calculated fields in a spreadsheet.

An observable is an adapter hooked on to an event source that produces a new promise everytime a new event comes through.

Observable represents my data source. I subscribe to it.

Think about an event stream as a never ending array. 

distinctUntilChanged() --> The first time a piece of data comes through let it go through. If naother one comes through and its the same piece of data don't let it go through. If something new comes along, let it go through.

