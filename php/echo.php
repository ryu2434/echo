<?php

function echoTest()
{
	
	foreach(func_get_args() as $next) {
		echo $next."<br>";
	}

}

echoTest();
echoTest('bla');
echoTest('foo', 'bar', 'baz');
