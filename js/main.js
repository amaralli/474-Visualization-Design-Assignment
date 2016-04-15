/*Created by Allison Amaral
	This program draws three different data visualizations, to try and represent aspects of a given data set.
	This data set focuses on bacteria and antibacterial treatment, and the relationship between all of them*/

//waits for the dom to be ready before altering it
$(document).ready(function() {
	//loads data
	Plotly.d3.csv('./antibiotics_data.csv', function(error, data) {

		//draws each visualization
		drawGraph1(data);
		drawGraph2(data);
		drawGraph3(data);

	});
});

//draws first visualization
function drawGraph1(data) {
	
	//grabs data from data set and coordinates it with graphical points
	var traces1 = [{
			type: 'bar',
			x: processData(data, 'Bacteria '),
			y: processData(data, 'Penicilin'),
			hoverinfo: processData(data, 'Penicilin')
		}];

	//assigns layout for visualization
	var layout1 = {
		title: 'How Effective is Penicilin Against Various Types of Bacteria?',
		showlegend: false,
		xaxis: {
			title: 'Bacteria Type'
		},
		yaxis: {
			title: 'Minimum Inhibitory Concentration (MIC)'
		},
		hovermode: 'closest',
		margin: {
			b:120
		}
	};

	//draws the visualization
	Plotly.newPlot('graph1', traces1, layout1);
}

//creates second visualization
function drawGraph2(data) {
	//takes in positive/negative values and processes them in a parsable way
	var gramValues = String(processData(data, 'Gram Staining '));
	gramArr = gramValues.split(",");

	//grabs data from data set and coordinates it with graphical points
	var traces2 = [{
		type: 'bar',
		x: processData(data, 'Bacteria '),
		y: processData(data, 'Neomycin'),
		hoverinfo: processData(data, 'Gram Staining '),
		marker: {
			color: processColor(gramArr)
		}
	}];

	//assigns layout for visualization
	var layout2 = {
		title: 'How does bacteria react with Neomycin and Gram Staining?',
		showlegend: false,
		xaxis: {
			title: 'Bacteria Type'
		},
		yaxis: {
			title: 'Minimum Inhibitory Concentration (MIC)'
		},
		hovermode: 'closest',
		margin: {
			b:120
		},
	};

	//draws visualization
	Plotly.newPlot('graph2', traces2, layout2);
}

//creates 3rd visualization
function drawGraph3(data) {

	//grabs first set of data for the first set of bars
	var traces3groupA = {
		type: 'bar',
		name: 'Neomycin',
		x: processData(data, 'Bacteria '),
		y: processData(data, 'Neomycin'),
		hoverinfo: processData(data, 'Neomycin')
	};

	//grabs the second set of data for the second set of bars
	var traces3groupB = {
		type: 'bar',
		name: 'Streptomycin',
		x: processData(data, 'Bacteria '),
		y: processData(data, 'Streptomycin '),
		hoverinfo: processData(data, 'Streptomycin ')
	};

	var traces3 = [traces3groupA, traces3groupB];

	//assigns layout for visualization
	var layout3 = {
		barmode: 'group',
		title: 'How Does Neomycin Compare To Streptomycin in Effectiveness Across Bacteria Types?',
		xaxis: {
			title: 'Bacteria Type'
		},
		yaxis: {
			title: 'Minimum Inhibitory Concentration (MIC)'
		},
		hovermode: 'closest',
		margin: {
			b:120
		}
	};
	
	//draws visualization
	Plotly.newPlot('graph3', traces3, layout3);
}

//selects a color to display based off of the gram staining results
function processColor(gramVal) {
	var colorArr = new Array();
	gramVal.forEach(function(item, index) {
		if(item == "positive") {
			colorArr[index] = 'rgba(211, 181, 242, 1)';
		} else {
			colorArr[index] = 'rgba(242, 181, 181, 1)';
		}
	})
	return colorArr;
}

//grabs the relevant row of information
function processData(rows, key) {
	return rows.map(function(row) {
		return row[key];

	});
}
