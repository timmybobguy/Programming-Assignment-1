class Controller {
  static setup () {
    let the2018Games = new Tournament('Gold Coast 2018 Commonwealth Games')

  var sportConfig = [
    {sport:"Netball", venue:"Gold Coast Convention and Exhibition Centre", data: netball, dataName: "netball"},
    {sport:"Men\'s Rugby Sevens", venue:"Robina Stadium", data: rugby, dataName: "rugby"},
    {sport:"Women\'s Rugby Sevens", venue:"Robina Stadium", data: wrugby, dataName: "wrugby"}
  ]
  for (var i = 0; i < sportConfig.length; i++) {
    let aSport = the2018Games.addSport(String(sportConfig[i].sport), String(sportConfig[i].venue))
    var local_data = sportConfig[i].data
    var dataName = String(sportConfig[i].dataName)

    for (var x = 0; x < local_data[dataName].length; x++) {
      aSport.addMatch(Number(local_data[dataName][x].year), Number(local_data[dataName][x].month), Number(local_data[dataName][x].day), Number(local_data[dataName][x].hour), Number(local_data[dataName][x].minute), String(local_data[dataName][x].poolName), String(local_data[dataName][x].teamNameA), String(local_data[dataName][x].teamNameB))
    }
  }
	addPoolResults(the2018Games)
  addShortNames(the2018Games)
  return the2018Games
  }
}

/*
    var local_data = netball;
    console.log(local_data);
    var para = document.createElement("p");
    var node = document.createTextNode(JSON.stringify(local_data));
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
    var result = "";
*/
/*
  let aSport = the2018Games.addSport('Netball', 'Gold Coast Convention and Exhibition Centre')
  var local_data = netball;
  for (var i = 0; i < local_data.netball.length; i++) {
    aSport.addMatch(Number(local_data.netball[i].year), Number(local_data.netball[i].month), Number(local_data.netball[i].day), Number(local_data.netball[i].hour), Number(local_data.netball[i].minute), String(local_data.netball[i].poolName), String(local_data.netball[i].teamNameA), String(local_data.netball[i].teamNameB))
  result = ""
  }

  aSport = the2018Games.addSport('Men\'s Rugby Sevens', 'Robina Stadium')
var rugby_data = rugby
  for (var i = 0; i < rugby_data.rugby.length; i++) {
    aSport.addMatch(Number(rugby_data.rugby[i].year), Number(rugby_data.rugby[i].month), Number(rugby_data.rugby[i].day), Number(rugby_data.rugby[i].hour), Number(rugby_data.rugby[i].minute), String(rugby_data.rugby[i].poolName), String(rugby_data.rugby[i].teamNameA), String(rugby_data.rugby[i].teamNameB))
  result = ""
  }

  aSport = the2018Games.addSport('Women\'s Rugby Sevens', 'Robina Stadium')
var wrugby_data = wrugby
  for (var i = 0; i < wrugby_data.wrugby.length; i++) {
    aSport.addMatch(Number(wrugby_data.wrugby[i].year), Number(wrugby_data.wrugby[i].month), Number(wrugby_data.wrugby[i].day), Number(wrugby_data.wrugby[i].hour), Number(wrugby_data.wrugby[i].minute), String(wrugby_data.wrugby[i].poolName), String(wrugby_data.wrugby[i].teamNameA), String(wrugby_data.wrugby[i].teamNameB))
  result = ""
  }
*/
