const generateLayout = () => {
const rec1 = [[7.5, 15, [/*content*/], [/*styles*/], 1, 0],
                [7.5, 85, [/*content*/], [/*styles*/], 1, 0],
                [50, 100, [/*content*/], [/*styles*/], 2, 0],
                [7.5, 15, [/*content*/], [/*styles*/], 2, 0]];

const rec2 = [[7.5, 85, [/*content*/], [/*styles*/], 2, 0]];
const rec3 = [[50, 100, [/*content*/], [/*styles*/], 1, 1]];
const rec4 = [[5, 100, [/*content*/], [/*styles*/], 2, 2]];

function getRectInfo(lstofRecs)
{
    var rectInfo = [];
    for(var i = 0; i < lstofRecs.length; i++){
        rectInfo.push({height: lstofRecs[i][0], width: lstofRecs[i][1], 
                        content: [lstofRecs[i][2]], styles: [lstofRecs[i][3]], 
                        order: lstofRecs[i][4],  margins: lstofRecs[i][5]});
    }
}

}

export default generateLayout;
