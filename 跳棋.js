
 var GameLevels = [
   [[-1, -1, 0, 0, 0, -1, -1],
    [-1, -1, 0, 1, 0, -1, -1],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [-1, -1, 0, 0, 0, -1, -1],
    [-1, -1, 0, 0, 0, -1, -1]],

    [[-1, -1, 0, 0, 0, -1, -1],
        [-1, -1, 0, 1, 0, -1, -1],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [-1, -1, 0, 1, 0, -1, -1],
        [-1, -1, 0, 0, 0, -1, -1]]
];
var Level = 0;
var str = "<table>";

var map = GameLevels[Level];

function map()
{
    
    for(var i = 0; i < 7; i++)
    {
        str += "<tr>";
    for(var j = 0; j < 7; j++)
    {
        if(map[i][j] == -1)
        str += '<td class="td01"></td>';
        else if(map[i][j] == 0)
        str += 'td class = "td02"</td>';
        else
        str += 'td class = "td03"</td>';

    }str += "</tr>";
    } 
    str += "</table>";
    document.getElementById("chess").innerHTML = str;
}
map();


