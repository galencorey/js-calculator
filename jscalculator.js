
$(document).ready(function() {
  var problem = [];
  var number = '';
  var br = false;

  function numfill(n) {
    if (br) {
      $('#answer').empty();
    }
    number += n;
    if (number.length>10){
      $('#answer').text('RANGE ERROR');
    } else {
        $('#answer').text(number);
    }
    br = false;
  }

  function opfill(op) {
    if (problem.length > 0) {
      eval();
    }
    problem.push(op);
    problem.push(Number(number));
    number = '';
    br = true;
  }

  function eval() {
    problem.push(Number(number));
    if (problem[0] === 'plus') {
      var answer = problem[1] + problem[2];
    }
    if (problem[0] === 'minus') {
      var answer = problem[1] - problem[2];
    }
    if (problem[0] === 'times') {
      var answer = problem[1] * problem[2];
    }
    if (problem[0] === 'divide') {
      var answer = problem[1] / problem[2];
    }
    if (answer > 999999999999){
      $('#answer').text(answer.toExponential(6));
    } else if (answer < 0.0000000001){
      $('#answer').text(answer.toExponential(6));
    } else if (answer.toString().length > 12) {
      if (Number.isInteger(answer)) {
      } else {
        answer = answer.toFixed(6);
        $('#answer').text(answer);
      }
    } else {
      $('#answer').text(answer);
    }
    problem = [];
    number = answer;
    br = true;
  }
  $('#one').click(function() {
    numfill('1');
  });
  $('#two').click(function() {
    numfill('2');
  });
  $('#three').click(function() {
    numfill('3');
  });
  $('#four').click(function() {
    numfill('4');
  });
  $('#five').click(function() {
    numfill('5');
  });
  $('#six').click(function() {
    numfill('6');
  });
  $('#seven').click(function() {
    numfill('7');
  });
  $('#eight').click(function() {
    numfill('8');
  });
  $('#nine').click(function() {
    numfill('9');
  });
  $('#zero').click(function() {
    numfill('0');
  });
  $('#point').click(function() {
    numfill('.');
  });
  $('#plus').click(function() {
    opfill('plus');
  });
  $('#percent').click(function() {
    number = number / 100;
    $('#answer').text(number);
  });
  $('#minus').click(function() {
    opfill('minus');
  });
  $('#times').click(function() {
    opfill('times');
  });
  $('#divide').click(function() {
    opfill('divide');
  });
  $('#equals').click(function() {
    eval();
  });
  $('#clear').click(function() {
    problem = [];
    number = '';
    $('#answer').empty();
  });
  $('#sign').click(function() {
    var dig = number.split('');
    if (dig[0] === '-') {
      dig.shift();
      number = dig.join('');
    } else {
      number = '-' + number;
    }
    $('#answer').text(number);
  });
});
