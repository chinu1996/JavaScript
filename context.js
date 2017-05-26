var obj = {
    foo: function() {
        console.log(this === window);

    }
};
obj.foo();