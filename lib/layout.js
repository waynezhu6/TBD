const generateLayout = () => {
  return [
    {height: 10, content: [100]},
    {height: 40, content: [100]},
    {height: 15, content: [50, 50]},
    {height: 35, content: [100]}
  ];
}

function getRectInfo(lstofRecs)
{
  var rectInfo = [];
  for(var i = 0; i < lstofRecs.length; i++){
    rectInfo.push({
      height: lstofRecs[i][0], 
      width: lstofRecs[i][1], 
      content: [lstofRecs[i][2]], 
      styles: [lstofRecs[i][3]], 
      order: lstofRecs[i][4],  
      margins: lstofRecs[i][5]
    });
  }
}

export default generateLayout;
