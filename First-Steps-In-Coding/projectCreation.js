function projectCreation(input) {
    let architectName = input[0];
    let numberProjects = input[1];
    let time = numberProjects * 3;
    console.log(`The architect ${architectName} will need ${time} hours to complete ${numberProjects} project/s.`);
}
projectCreation("architectName", "numberProjects");