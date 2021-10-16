function addDesktop() {
	workspace.desktops += 1;
}

function deleteLast() {
	if (workspace.desktops== 1)
		return;
	workspace.desktops -= 1;
}

function shiftToRight(number) {
	return client => {
		if (client.desktop > number)
			client.desktop -= 1;
	};
}
