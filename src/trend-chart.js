/* Author: Hariharan Muthukrishnan */
function trendChart(id, values) {

    var canvas = document.getElementById(id);
    var cntx = canvas.getContext('2d');

    var xCoordinate = 50;
    var yCoordinate = 10;
    var xCoordValue = 70;
    var yCoordValue = 1;
    var j = 1;
    var arrValues = [];

    //Adding hash and numbers to the array values
    for (i = 0; i < values.length; i++) {
        arrValues[i] = [j++] + ". #" + values[i];
    }
   
    for (i = 0; i < values.length; i++) {
 
        createTrendChart(xCoordinate += 10, yCoordinate += 50, xCoordValue += 3, yCoordValue += 50);

        function createTrendChart(x, y, vx, vy) {
            //self-executing function for drawing the chart
            animate()

            function animate() {
                if (x < 250) {
                    requestAnimationFrame(animate)
                    cntx.beginPath();
                    cntx.arc(x, y, 5, 0, 2 * Math.PI);
                    cntx.strokeStyle = '#1da1f2';
                    cntx.fillStyle = '#1da1f2';
                    cntx.fill();
                    cntx.stroke();

                    x += 1;

                }
            }
            cntx.font = "20px Arial";
            // Filling the Text values
            cntx.fillText(arrValues[i], vx, vy)
        }
    }
  }