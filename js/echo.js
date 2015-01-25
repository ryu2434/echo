function echo()
{
    for (i = 0; i < arguments.length; i++) {
        document.write("" + arguments[i].toString() + "<br>");
    }
    
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
