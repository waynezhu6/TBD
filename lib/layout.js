const instagram = [
  {height: 7.5, content: [15, 85]},
  {height: 50, content:[100]},
  {height: 5, content:[20, 80]},
  {height: 7.5, content: [100]},
  {height: 7.5, content: [100]},
  {height: 7.5, content: [100]},
  {height: 7.5, content: [100]},
  {height: 7.5, content: [15, 5, 15, 5, 15, 5, 15, 5, 15, 5]}
];
const news = [
  {height: 20, content: [100]},
  {height: 10, content: [100]},
  {height: 20, content: [100]},
  {height: 10, content: [100]},
  {height: 20, content: [100]},
  {height: 10, content: [100]},
  {height: 10, content: [100]}
];

const weather =[
  {height: 40, content: [100]},
  {height: 7.5, content: [100]},
  {height: 9.5, content: [25, 25, 25, 25]},
  {height: 7.5, content: [100]},
  {height: 15, content: [100]},
  {height: 12.5, content: [100]}
];

const homeScreen = [
  {height: 2.5, content: [100]},
  {height: 7.5, content: [5, 15, 10, 15, 10, 15, 10, 15, 5]},
  {height: 5, content: [5, 90, 5]},
  {height: 7.5, content: [5, 15, 10, 15, 10, 15, 10, 15, 5]},
  {height: 5, content: [5, 90, 5]},
  {height: 7.5, content: [5, 15, 10, 15, 10, 15, 10, 15, 5]},
  {height: 5, content: [5, 90, 5]},
  {height: 7.5, content: [5, 15, 10, 15, 10, 15, 10, 15, 5]},
  {height: 5, content: [5, 90, 5]},
  {height: 7.5, content: [5, 15, 10, 15, 10, 15, 10, 15, 5]},
  {height: 5, content: [5, 90, 5]},
  {height: 7.5, content: [5, 15, 10, 15, 10, 15, 10, 15, 5]},
  {height: 5, content: [5, 90, 5]},
  {height: 7.5, content: [5, 15, 10, 15, 10, 15, 10, 15, 5]},
  {height: 5, content: [5, 90, 5]},
  {height: 7.5, content: [5, 15, 10, 15, 10, 15, 10, 15, 5]},
  {height: 5, content: [5, 90, 5]}
];

const article = [
  {height: 10, content: [10, 80, 10]},
  {height: 15, content: [10, 80, 10]},
  {height: 15, content: [10, 30, 50, 10]},
  {height: 12.5, content: [10, 80, 10]},
  {height: 15, content: [10, 50, 30, 10]},
  {height: 12.5, content: [10, 80, 10]},
  {height: 15, content: [10, 30, 50, 10]},
  {height: 5, content: [10, 80, 10]}
];

const article2 = [
  {height: 10, content: [10, 80, 10]},
  {height: 15, content: [10, 80, 10]},
  {height: 20, content: [10, 80, 10]},
  {height: 25, content: [10, 80, 10]},
  {height: 20, content: [10, 80, 10]},
  {height: 10, content: [10, 80, 10]}
];

const twitter = [
  {height: 7.5, content: [5, 15, 5, 70, 5]},
  {height: 2.5, content: [100]},
  {height: 7.5, content: [5, 15, 5, 70, 5]},
  {height: 20, content: [25, 70,5]},
  {height: 2.5, content: [100]},
  {height: 7.5, content: [5, 15, 5, 70, 5]},
  {height: 20, content: [25, 70,5]},
  {height: 2.5, content: [100]},
  {height: 7.5, content: [5, 15, 5, 70, 5]},
  {height: 17.5, content: [25, 70,5]},
  {height: 5, content: [100]}
];

const texting = [
  {height: 5, content: [10, 5, 85]},
  {height: 5, content: [100]},
  {height: 5, content: [5, 10, 5, 60, 20]},
  {height: 2.5, content: [100]},
  {height: 5, content: [20, 60, 5, 10, 5]},
  {height: 2.5, content: [100]},
  {height: 5, content: [5, 10, 5, 60, 20]},
  {height: 2.5, content: [100]},
  {height: 5, content: [5, 10, 5, 60, 20]},
  {height: 2.5, content: [100]},
  {height: 5, content: [20, 60, 5, 10, 5]},
  {height: 2.5, content: [100]},
  {height: 5, content: [5, 10, 5, 60, 20]},
  {height: 2.5, content: [100]},
  {height: 5, content: [5, 10, 5, 60, 20]},
  {height: 20, content: [20, 60, 20]},
  {height: 2.5, content: [100]},
  {height: 5, content: [5, 10, 5, 60, 20]},
  {height: 2.5, content: [100]},
  {height: 5, content: [20, 60, 5, 10, 5]},
  {height: 5, content: [100]}
];

const allRecs = [instagram, twitter, texting, news, article, 
                article2, weather, homeScreen]

function giveRectanges(allRecs)
{
  var i = Math.floor(Math.random() * 8);
  return(allRecs[i]);
}

const generateLayout = () => {

}

export default generateLayout;
