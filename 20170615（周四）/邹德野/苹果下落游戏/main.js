
(function () {

    var oMiss = document.getElementById("miss").getElementsByTagName("span")[0];
    var oScore = document.getElementById("score").getElementsByTagName("span")[0];
    var missNum = 0;
    var scoreNum = 0;
    var btnInfo = document.getElementById("info");
    var isShow = false;
    var gameInfo = document.getElementById("game_info");
    var btnStart = document.getElementById("start");


    function Apple() {
        this.left = 52 * parseInt(Math.random() * parseInt(document.documentElement.clientWidth / 52));
        this.speed = 3;
        this.oApple = document.createElement("div");
        this.topNum = 0;
        this.score = 0;
        this.letters = [
            'a', 'b', 'c', 'd', 'e',
            'f', 'g', 'h', 'i', 'j',
            'k', 'l', 'm', 'n', 'o',
            'p', 'q', 'r', 's', 't',
            'u', 'v', 'w', 'x', 'y',
            'z'
        ];
        this.letter = this.letters[parseInt(Math.random() * 26)];
    }

    Apple.prototype.init = function () {
        this.oApple.innerText = this.letter;
        this.oApple.style.left = this.left + "px";
        this.oApple.className = "apple";
        document.body.appendChild(this.oApple);
        oMiss.innerText = missNum;
        oScore.innerText = scoreNum;
    };

    Apple.prototype.changeSpeed = function () {
        if (oScore.innerText > 0 && oScore.innerText < 10) {
            this.speed = 3;
        } else if (oScore.innerText < 40) {
            this.speed = 5;
        } else if (oScore.innerText < 70) {
            this.speed = 9;
        } else if (oScore.innerText < 100) {
            this.speed = 12;
        } else if (oScore.innerText < 150) {
            this.speed = 15;
        } else if (oScore.innerText < 180) {
            this.speed = 20;
        } else {
            this.speed = 25;
        }

    };

    Apple.prototype.fallDown = function () {
        var self = this;
        var timer = setInterval(function () {
            self.topNum += self.speed;
            self.oApple.style.top = self.topNum + "px";
            if (self.oApple && self.topNum >= (document.documentElement.clientHeight - 60)) {
                self.die();
                missNum++;
                oMiss.innerText = missNum;
                clearInterval(timer);
            }
        }, 50);
    };

    Apple.prototype.typeJudge = function () {
        var self = this;
        document.addEventListener("keydown", function (event) {
            if (event.key == self.letter) {
                scoreNum++;
                oScore.innerText = scoreNum;
                self.die();
            }
        }, false);
    };

    Apple.prototype.die = function () {
        document.body.removeChild(this.oApple);
    };

    var main = function () {
        var timer = setInterval(function () {
            if (oMiss.innerText >= 10) {
                alert("恭喜你,Game Over!");
                clearInterval(timer);
            }
            var oLetter = new Apple();
            oLetter.init();
            oLetter.changeSpeed();
            oLetter.typeJudge();
            oLetter.fallDown();
        }, 1000);
    };


    // btnInfo.addEventListener("click", function () {
    //     if (!isShow) {
    //         gameInfo.style.display = "block";
    //         isShow = true;
    //     } else {
    //         gameInfo.style.display = "none";
    //         isShow = false;
    //     }
    // }, false);

    btnStart.addEventListener("click", function () {
        main();
    }, false);

})();