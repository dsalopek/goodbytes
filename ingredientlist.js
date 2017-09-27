$(document).ready(function () {
	$("#ingredientInput").on("input", function (e) {

	})


	function autoCompleteSearch(inStr) {
		$.ajax({
			url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/autocomplete', // The URL to the API. You can get this in the API page of the API you intend to consume
			type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
			data: {
				"query": inStr,
				// "number": 5
			}, // Additional parameters here
			dataType: 'json',
			success: function (data) {
				console.log(data);
			},
			error: function (err) {
				alert("Error");
			},
			beforeSend: function (xhr) {
				xhr.setRequestHeader("X-Mashape-Key", "FEVql0chRwmshPvhp3dPwwUBrnIEp1YtlVOjsnTrd2lxtjFWjW"); // Enter here your Mashape key
			}
		});
	}

	var counter = 1;

	$("#addIngr").on("click", function () {
		var input = $("#ingredientInput").val();
		if (input != '') {
			var newRow = $("<tr>");
			var cols = '<td class="col-cm-8 align-middle"><p>' + input + '</p></td>';
			cols += '<td class="col-sm-4"><input type="button" class="ibtnDel btn btn-md btn-danger btn-block" id="delBtn' + counter + '" value="Delete"></td>';
			newRow.append(cols);
			$("table.order-list").append(newRow);
			$("#ingredientInput").val('');
		}

		//search(ingredientList)

	})

	function getIngredients() {
		var ingredientList = [];
		$("table#ingrTable input[type=text]").each(function () {
			ingredientList.push($(this).val());
		})
		var ingredientString = ingredientList.join(",");
		search(ingredientString);
		// return ingredientString;
	}

	$("table#ingrTable").on("click", ".ibtnDel", function (event) {
		$(this).closest("tr").remove();
		//getIngredients();
	});
})