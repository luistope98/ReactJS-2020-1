document.querySelector(".item.i1").style.backgroundImage = "none";

var itemsArray = document.querySelectorAll(".item");

console.log(itemsArray);
var i;
for (i = 0; i < itemsArray.length; i++) {
    itemsArray[i].addEventListener("click", function (e) {
        //console.log("clickeo");
        //console.log(e.target.innerText);
        //console.log(e.target.className);

        var itemClicked = e.target.className;
        //console.log(e.target.className);
        var itemName = "." + itemClicked.slice(0, 4) + "." + itemClicked.slice(5, 7);

        var item = document.querySelector(itemName);

        // https://stackoverflow.com/questions/14013131/javascript-get-background-image-url-of-div
        var itemStyle = item.currentStyle || window.getComputedStyle(item, false);
        //

        var itemBackground = itemStyle.backgroundImage;

        if (item.style.backgroundImage != "none") {
            var neighborsIndexes = getNeighbors(item);

            var neighborEmpty = checkNeighbors(neighborsIndexes);

            if (neighborEmpty != null) {
                neighborEmpty.style.backgroundImage = itemBackground;
                item.style.backgroundImage = "none";
            }
        }
    });
}

function checkNeighbors(neighborsIndexes) {
    var neighborEmpty = null;
    neighborsIndexes.forEach(function (item, index, array) {
        var neighborClass = ".item.i" + item;

        if (document.querySelector(neighborClass).style.backgroundImage == "none") {
            neighborEmpty = document.querySelector(neighborClass);
        }
    });
    return neighborEmpty;
}

function getNeighbors(item) {
    var num = item.className.slice(6, 7);
    var neighborsArray = [];

    if (num == 1) {
        neighborsArray.push("2");
        neighborsArray.push("4");
    } else if (num == 2) {
        neighborsArray.push("1");
        neighborsArray.push("3");
        neighborsArray.push("5");
    } else if (num == 3) {
        neighborsArray.push("2");
        neighborsArray.push("6");
    } else if (num == 4) {
        neighborsArray.push("1");
        neighborsArray.push("5");
        neighborsArray.push("7");
    } else if (num == 5) {
        neighborsArray.push("2");
        neighborsArray.push("4");
        neighborsArray.push("6");
        neighborsArray.push("8");
    } else if (num == 6) {
        neighborsArray.push("3");
        neighborsArray.push("5");
        neighborsArray.push("9");
    } else if (num == 7) {
        neighborsArray.push("4");
        neighborsArray.push("8");
    } else if (num == 8) {
        neighborsArray.push("5");
        neighborsArray.push("7");
        neighborsArray.push("9");
    } else if (num == 9) {
        neighborsArray.push("6");
        neighborsArray.push("8");
    } else {

    }

    return neighborsArray;
}