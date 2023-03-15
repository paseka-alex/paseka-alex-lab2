var res = [];

function shellSort(arr) {
  res = [];
  const n = arr.length;
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;

      res.push(
        arr
          .map((el, idx) =>
            idx === i || idx === j ? `<span class="colored">${el}</span>` : el
          )
          .join(" ")
      );
    }
  }
  res.push(arr.join(" "));
}

var bttn_next = document.getElementById("next-step");
var bttn_prev = document.getElementById("prev-step");

document.getElementById("submit").addEventListener("click", function () {
  let input = document.getElementById("array-input");
  let arr = input.value.split(" ").map(Number);
  if (!checkForNan(arr)) {
    document.getElementById("app").innerHTML = arr.join(" ");
    shellSort(arr);
  } else {
    alert("found non-a-number value! please input only numbers! try again");
  }
});

var counter = 0;
bttn_next.addEventListener("click", function () {
  if (counter < res.length) {
    document.getElementById("app").innerHTML = res[counter];
    counter++;
  }
});
bttn_prev.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
    document.getElementById("app").innerHTML = res[counter];
  }
});

function checkForNan(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === false || Number.isNaN(arr[i])) {
      return true;
    }
  }
}
