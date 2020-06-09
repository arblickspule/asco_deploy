<? 
function _bot_detected() {

  return (
    isset($_SERVER['HTTP_USER_AGENT'])
    && preg_match('/bot|crawl|slurp|spider|mediapartners/i', $_SERVER['HTTP_USER_AGENT'])
  );
}

if (!_bot_detected()) {
    echo readFile("index.html");
} else {
    print "Hello Bot, I'll give you some sugar soon. ;)";
}
?>