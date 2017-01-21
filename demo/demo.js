var
	$show_1 = $('#show_1'),
	$show_2 = $('#show_2'),
	$show_3 = $('#show_3'),
	$show_4 = $('#show_4'),
	$show_6 = $('#show_6'),
	$show_5 = $('#show_5');

$show_1.on("click", function () {
	var PopupsGroup = new FlaterialPopups().init({
		type: "info",
		title: "Flaterial is awesome !",
		body: "I will use it in all my projects. It's performent, cross browser, sweet and easy to use.",
		hasBackdrop: true,
		queue: false
	});
	var popup = new PopupsGroup.Popup().show();
});

$show_2.on("click", function () {
	var PopupsGroup = new FlaterialPopups().init({
		type: "error",
		title: "jQuery is required by Flaterial",
		body: "You should include jQuery main file, jQuery easing plugin before use FlaterialPopups.",
		closeOnClick: false,
		queue: true
	});
	var popup = new PopupsGroup.Popup().show();
});

$show_3.on("click", function () {
	var PopupsGroup = new FlaterialPopups().init({
		type: "success",
		title: "Flaterial Popups v 1.1.0 released !",
		body: "New object structure",
		closeOnClick: false,
		autoCloseDelay: 2000
	});
	var popup = new PopupsGroup.Popup().show();
});

$show_4.on("click", function () {
	var PopupsGroup = new FlaterialPopups().init({
		type: "warning",
		title: "Flaterial Popups v 1.0.0 is deprecated !",
		body: "Move on.",
		closeOnClick: true,
		hasBackdrop: true,
		agressive: true
	});
	var popup = new PopupsGroup.Popup().show();
});

$show_5.on("click", function () {
	var PopupsGroup = new FlaterialPopups().init({
		type: "warning",
		title: "Will you use Flaterial Popups !?",
		body: "Move on.",
		closeOnClick: false,
		hasBackdrop: true,
		agressive: true,
		waitingForUser: true,
		waitingForUserOpts: {
			positiveText: "yes, i will",
			positiveFunction: function () {
				alert("That's cool. Enjoy !");
			},
			negativeText: "maybe next version",
			negativeFunction: function () {
				alert("Thanks " + prompt('Right ! Give me your names so i can notify you when new version released.') + " !");
			}
		}
	});
	var popup = new PopupsGroup.Popup();
	popup.show();
});

$show_6.on("click", function () {
	var PopupsGroup = new FlaterialPopups().init({
		type: "imgs/user.jpg",
		title: "New message from John Doe",
		body: "Collègue, je viens de trouver un plugin très cool pour gérer mes plugins. C'est le FlaterialPopups. Le développeur sort bientôt un Date time picker aussi performant. Tu devrais essayer !",
		closeOnClick: true
	});
	var popup = new PopupsGroup.Popup().show();
});