# deep-setter
sets a value deep in an object

#Install

    npm install deep-setter --save

#Usage

    var setter = require('deep-setter');
    //setter is a function that takes (originObject, deepValueAnnotation, value)

If You:

    setter({}, 'an.[@1].arbitrary.[@0].address', 'value')

Result:

    { an : [, { arbitrary : [ { address : 'value'} ] } ] } );

___


If You:

    setter({}, 'an.1.arbitrary.0.address', 'value')

Result:

     { an : { 1 : { arbitrary : { 0 : { address : 'value'} } } } } );

___


If You:

    setter({}, 'an.arbitrary.address', { test : 'value'})

Result:

    { an : { arbitrary : { address : { test : 'value' }} } } );
