console.log("Connected");

$(document).ready(function() {

let counter = 0;

let check = function () {
  let box1 = $("#box1").text()
  let box2 = $("#box2").text()
  let box3 = $("#box3").text()
  let box4 = $("#box4").text()
  let box5 = $("#box5").text()
  let box6 = $("#box6").text()
  let box7 = $("#box7").text()
  let box8 = $("#box8").text()
  let box9 = $("#box9").text()
  if (box1 === box2 && box2 === box3 && box1 !== "") {
    alert("You won the game")
  }

  if (box4 === box5 && box5 === box6 && box4 !== "") {
    alert("You won the game")
  }

  if (box7 === box8 && box8 === box9 && box7 !== "") {
    alert("You won the game")
  }

  if (box1 === box4 && box4 === box7 && box1 !== "") {
    alert("You won the game")
  }
  if (box2 === box5 && box5 === box8 && box2 !== "") {
    alert("You won the game")
  }
  if (box3 === box6 && box6 === box9 && box3 !== "") {
    alert("You won the game")
  }
  if (box1 === box5 && box5 === box9 && box1 !== "") {
    alert("You won the game")
  }
  if (box7 === box5 && box5 === box3 && box7 !== "") {
    alert("You won the game")
  }
}

  $("#box1").on('click', function () {
    if (counter%2 === 0) {
      this.append('X')
    } else {
      this.append('O')
    }
    counter = counter + 1;
    check();
  })

  $("#box2").on('click', function () {
    if (counter%2 === 0) {
      this.append('X')
    } else {
      this.append('O')
    }
    counter = counter + 1;
    check();
  })
  $("#box3").on('click', function () {
    if (counter%2 === 0) {
      this.append('X')
    } else {
      this.append('O')
    }
    counter = counter + 1;
    check();
  })
  $("#box4").on('click', function () {
    if (counter%2 === 0) {
      this.append('X')
    } else {
      this.append('O')
    }
    counter = counter + 1;
    check();
  })
  $("#box5").on('click', function () {
    if (counter%2 === 0) {
      this.append('X')
    } else {
      this.append('O')
    }
    counter = counter + 1;
    check();
  })
  $("#box6").on('click', function () {
    if (counter%2 === 0) {
      this.append('X')
    } else {
      this.append('O')
    }
    counter = counter + 1;
    check();
  })
  $("#box7").on('click', function () {
    if (counter%2 === 0) {
      this.append('X')
    } else {
      this.append('O')
    }
    counter = counter + 1;
    check();
  })
  $("#box8").on('click', function () {
    if (counter%2 === 0) {
      this.append('X')
    } else {
      this.append('O')
    }
    counter = counter + 1;
    check();
  })
  $("#box9").on('click', function () {
    if (counter%2 === 0) {
      this.append('X')
    } else {
      this.append('O')
    }
    counter = counter + 1;
    check();
  })

  $(".refresh").on("click", function () {
     window.location.reload()
  })
})
