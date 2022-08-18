// code your solution here
function saturdayFun(task = 'roller-skate'){
    return `This Saturday, I want to ${task}!`;

}
saturdayFun('bathe my dog.');

function mondayWork(activity= 'go to the office'){
    return `This Monday, I will ${activity}.`;

}
mondayWork('work from home');


function wrapAdjective(asteric = '||'){
    return function (person = 'a hard worker'){
        return `You are ${asteric}${person}${asteric}!`;

    };

};
wrapAdjective();

