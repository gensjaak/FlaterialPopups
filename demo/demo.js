var
	$show_1 = $('#show_1'),
	$show_2 = $('#show_2'),
	$show_3 = $('#show_3'),
	$show_4 = $('#show_4'),
	$show_5 = $('#show_5');

$show_1.on("click", function () {
	F.popup.config({
		type: "info",
		icon: "",
		title: "Flaterial-Popup demo",
		body: "This is a demo of popup's from Flaterial concept. Performent, Easy to use, Cross browser",
		hasBackdrop: true,
		agressive: false,
		queue: false,
		autoCloseDelay: false,
		closeOnClick: true,
		closeOnMouseOver: false,
		waitingForUser: false,
		waitingForUserOpts: {}
	}).show();
});

$show_2.on("click", function () {
	F.popup.config({
		type: "success",
		icon: "",
		title: "Flaterial-Popup demo",
		body: "This is a demo of popup's from Flaterial concept. Performent, Easy to use, Cross browser",
		hasBackdrop: false,
		agressive: false,
		queue: true,
		autoCloseDelay: false,
		closeOnClick: true,
		closeOnMouseOver: false,
		waitingForUser: false,
		waitingForUserOpts: {}
	}).show();
});

$show_3.on("click", function () {
	F.popup.config({
		type: "error",
		icon: "",
		title: "Flaterial-Popup demo",
		body: "This is a demo of popup's from Flaterial concept. Performent, Easy to use, Cross browser",
		hasBackdrop: false,
		agressive: false,
		queue: true,
		autoCloseDelay: 2000,
		closeOnClick: false,
		closeOnMouseOver: false,
		waitingForUser: false,
		waitingForUserOpts: {}
	}).show();
});

$show_4.on("click", function () {
	F.popup.config({
		type: "warning",
		icon: "",
		title: "Flaterial-Popup demo",
		body: "This is a demo of popup's from Flaterial concept. Performent, Easy to use, Cross browser",
		hasBackdrop: true,
		agressive: true,
		queue: false,
		autoCloseDelay: false,
		closeOnClick: true,
		closeOnMouseOver: false,
		waitingForUser: false,
		waitingForUserOpts: {}
	}).show();
});

$show_5.on("click", function () {
	F.popup.config({
		type: "success",
		icon: "",
		title: "Flaterial-Popup demo",
		body: "This is a demo of popup's from Flaterial concept. Performent, Easy to use, Cross browser",
		hasBackdrop: true,
		agressive: true,
		queue: false,
		autoCloseDelay: false,
		closeOnClick: true,
		closeOnMouseOver: false,
		waitingForUser: true,
		waitingForUserOpts: {
			positiveText: "ok",
			positiveFunction: function () {
				alert('You clicked OK button');
			},
			negativeText: "cancel",
			negativeFunction: function () {
				alert('You abort operation !');
			}
		}
	}).show();
});