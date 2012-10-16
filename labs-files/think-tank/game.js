var thinkTank = (function () {
  var PI = Math.PI,
      $area = $('.area'),
      $map = $('.map'),
      mapLeft = parseInt($map.css('left')) || 0,
      mapTop = parseInt($map.css('top')) || 0,
      $tank = $('.tank'),
      $tankBase = $('.tank .base'),
      tankLeft = parseInt($tank.css('left')) || 0,
      tankTop = parseInt($tank.css('top')) || 0,
      $turret = $('.turret'),
      angleStep = PI / 8,
      driveStep = 10,
      vectorAngle = 0,
      vectorX = 0,
      vectorY = driveStep,
      rotate,
      turn;

  rotate = function ($element, radiants) {
    $element.css('-moz-transform', 'rotate(' + radiants + 'rad)');
    $element.css('-ms-transform', 'rotate(' + radiants + 'rad)');
    $element.css('-o-transform', 'rotate(' + radiants + 'rad)');
    $element.css('-webkit-transform', 'rotate(' + radiants + 'rad)');
    $element.css('transform', 'rotate(' + radiants + 'rad)');
  };

  turn = function () {
    vectorX = driveStep * Math.sin(vectorAngle);
    vectorY = driveStep * Math.cos(vectorAngle);
    rotate($tankBase, vectorAngle.toFixed(2));
  };

  return {
    getVector: function () {
      return {
        x: vectorX,
        y: vectorY
      }
    },
    tank: {
      driveForward: function () {
        tankLeft += vectorX;
        tankTop -= vectorY;
        $tank.css('left', tankLeft + 'px');
        $tank.css('top', tankTop + 'px');
      },
      turnLeft: function () {
        vectorAngle -= angleStep;
        turn();
      },
      turnRight: function () {
        vectorAngle += angleStep;
        turn();
      },
      rotateTurret: function (angle) {
        rotate($turret, angle);
      },
      getSize: function () {
        return {
          height: $tank.height(),
          width: $tank.width()
        };
      },
      getPosition: function () {
        return {
          top: tankTop,
          left: tankLeft
        };
      }
    },
    area: {
      getSize: function () {
        return {
          height: $area.height(),
          width: $area.width()
        };
      },
      getPosition: function () {
        return {
          top: $area[0].offsetTop,
          left: $area[0].offsetLeft
        };
      }
    },
    map: {
      moveBackward: function () {
        mapLeft -= vectorX;
        mapTop += vectorY;
        $map.css('left', mapLeft + 'px');
        $map.css('top', mapTop + 'px');
      },
      getSize: function () {
        return {
          height: $map.height(),
          width: $map.width()
        };
      },
      getPosition: function () {
        return {
          top: $map[0].offsetTop,
          left: $map[0].offsetLeft
        };
      }
    }
  }
})();
