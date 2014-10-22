angular.module('netlifyApp', ['ngSanitize']).controller('howCtrl', ['$scope', '$timeout', function($scope, $timeout) {


}]).controller('modalCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.signup = function($event) {
    $timeout(function() {
      $scope.modal = true;
    }, 1);
  }

  $scope.closeModal = function($event) {
    for (var i in $event.path) {
      if ($event.path[i].classList && $event.path[i].classList.contains("modal")) { return; }
    }

    $scope.modal = false;
  }

}]).controller('terminalCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  var lines = [
    {
      cmd: "cd ~/sites/my-static-site"
    },
    {
      cmd: "netlify deploy",
      out: [
        "Deploying folder: ~/sites/my-static-site",
        "Deploy created, waiting for processing",
        "Deploy is live:",
        "  http://shepherd-hardy-53434.netlify.com"
      ]
    },
    {
      cmd: "",
    },
    {
      cmd: "netlify update --domain www.netlify.com",
      out: [
        "Site updated:",
        "  http://www.netlify.com"
      ]
    }
    // ,
    // {
    //   clear: true,
    //   cmd: "cd ~/sites/my-middleman-site"
    // },
    // {
    //   cmd: "netlify init",
    //   out: [
    //     ""
    //   ]
    // }
  ];

  var linenum = 0;
  $scope.terminal = {output: "$ "};

  var typeCmd = function(cmd, cb) {
    if (cmd.length) {
      $scope.terminal.output += cmd.substr(0,1);
      $timeout(function() {
        typeCmd(cmd.substr(1), cb);
      }, Math.random() * 100 + 20);
    } else {
      cb();
    }
  };

  var printOutput = function(outLines, num, cb) {
    var line = outLines[num];
    if (line) {
      $scope.terminal.output += ("<br/>" + line);
      $timeout(function() {
        printOutput(outLines, num+1, cb);
      }, Math.random() * 600 + 200);
    } else {
      cb();
    }
  }

  var typeLine = function() {
    var line = lines[linenum];
    if (line) {
      typeCmd(line.cmd, function() {
        printOutput(line.out || [], 0, function() {
          $scope.terminal.output += "<br/>$ ";
          linenum += 1;
          $timeout(typeLine, 1000);
        });
      });
    } else {
      $timeout(function() {
        $scope.terminal.output = "$ ";
        linenum = 0;
        typeLine();
      }, 5000);
    }
  }

  typeLine();
}]);
