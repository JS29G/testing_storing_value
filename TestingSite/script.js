AFRAME.registerComponent('for_a_marker', {
    init: function () {
        var play = document.getElementById('Play');
        var highscore = document.getElementById('HighScore');
        var header = document.getElementById('Header');
        var pplane = document.getElementById('P-Plane');
        var hsplane = document.getElementById('HS-Plane');
        
        var headerquestion = document.getElementById('H-Question');
        var qA = document.getElementById('A');
        var qB = document.getElementById('B');
        var qC = document.getElementById('C');
        var qD = document.getElementById('D');
        // var aplane = document.getElementById('A-Plane');
        // var bplane = document.getElementById('B-Plane');
        // var cplane = document.getElementById('C-Plane');
        // var dplane = document.getElementById('D-Plane');

        play.addEventListener("click", function (mouseenter) {
            alert("do your hide");
            // Clean
            header.setAttribute('value', '');
            play.setAttribute('value', '');
            highscore.setAttribute('value', '');
            // pplane.setAttribute('color', 'black');
            // pplane.setAttribute('position', '-0.9 0.3 -3.7');
            // hsplane.setAttribute('color', 'black');
            // hsplane.setAttribute('position', '-0.9 0.3 -3.7');
            
            // Question
            headerquestion.setAttribute('value', 'Where did Willem Adriaan de Wit come from before landing in Malacca?');
            qA.setAttribute('value', 'Johannesburg');
            qB.setAttribute('value', 'Cape Town');
            qC.setAttribute('value', 'Durban');
            qD.setAttribute('value', 'Portugal');
            // aplane.setAttribute('color', 'blue');
            // bplane.setAttribute('color', 'blue');
            // cplane.setAttribute('color', 'blue');
            // dplane.setAttribute('color', 'blue');
            
            //Answer
            qA.addEventListener("click", function (mouseenter) {
                alert("do your hide");
            })
        });
        
        
    }
});