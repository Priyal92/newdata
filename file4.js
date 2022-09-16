examples/angular/index.html
@kof
kof docs, better view on github button
Latest commit fe08cbb on Jan 6, 2017
 History
 1 contributor
17 lines (17 sloc)  739 Bytes

<!DOCTYPE html>
<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <title>Angular with jss</title>
    <link rel="stylesheet" href="../example.css" />
    <script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.0-beta.13/angular.min.js"></script>
    <script src="../jss.js"></script>
    <script src="./app.js"></script>
  </head>
  <body ng-controller="myController">
    <a href="https://github.com/cssinjs/examples/tree/gh-pages/angular" title="View on Github" class="github-fork-ribbon" target="_blank">View on Github</a>
    <button class="{{classes.button1}}">Button 1</button>
    <button class="{{classes.button2}}">Button 2</button>
    <button ng-click="showSource()">View source</button>
  </body>
</html>