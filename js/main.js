$(document).ready(function() {
	d3.csv('../antibiotics_data.csv', function(data) {
		console.log(data);

		function processData(rows, key) {
			return rows.map(function(row) {
				return row[key];
			});
		}

		var trace1 = [{

		}];

		var layout1 = {

		};

		Plotly.newPlot('graph1', trace1, layout1);

		var trace2 = [{

		}];

		var layout2 = {

		};

		Plotly.newPlot('graph2', trace2, layout2);

		var trace3 = [{

		}];

		var layout3 = {

		};
		
		Plotly.newPlot('graph3', trace3, layout3);

	});
});

function buildGraphs() {
	
}