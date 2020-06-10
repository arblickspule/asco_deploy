<? 
function _bot_detected() {

  return (
    isset($_SERVER['HTTP_USER_AGENT'])
    && preg_match('/bot|crawl|slurp|spider|mediapartners/i', $_SERVER['HTTP_USER_AGENT'])
  );
}

function _app_detected() {

  return (
    isset($_SERVER['header1'])
  );
}


if (!_bot_detected() || _app_detected()) {
    echo readFile("index.html");
} else {
    // echo readFile("index_bot.html")
    print "Hello Bot, I'll give you some sugar soon. ;)";
}
?>