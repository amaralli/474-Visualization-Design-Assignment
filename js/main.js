$(document).ready(function() {
	
});

function buildGraphs() {
	Plotly.newPlot('graph1', traces1, layout1);
	Plotly.newPlot('graph2', traces2, layout2);
	Plotly.newPlot('graph3', traces3, layout3);
}