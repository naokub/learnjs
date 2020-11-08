
var formattedProblems = [];
learnjs.problems.forEach ( function(problem) {
	formattedProbles.push({
		code: learnjs.formatCOde(problem.code),
		name:	problem.name
	});
};
return formattedProblems;

