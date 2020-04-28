// 2-8の学習を開始
$(document).ready(function () {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas')); //これから全てCanvasないでは変化させる

  let tool = new Tool();

  let c = Shape.Circle(200, 200, 80); //円を表示
  c.fillColor = 'black'; //黒色にする
  let text = new PointText(200, 200); //paperJSの機能
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontsize = 20;
  text.content = 'hello World';


  tool.onMouseDown = function (event) {
    let c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = 'green';
  }

});