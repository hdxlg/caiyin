function loadHtml(url, targetId) {
	$.ajax({
		url: url,
		async: false,
		dataType: "html",
		success: function(data) {
			$("#" + targetId).html(data);
		}
	});
}
