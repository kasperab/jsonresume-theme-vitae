function render(resume) {
	let title = "Resume";
	let description = "";
	let body = "";
	if (resume.basics) {
		if (resume.basics.name) {
			title = resume.basics.name;
			body += "<h1>" + resume.basics.name + "</h1>";
		}
		if (resume.basics.label) {
			title += " - " + resume.basics.label;
			body += "<h2>" + resume.basics.label + "</h2>";
		}
		let contact = "";
		if (resume.basics.phone) {
			contact += "<a href='tel:" + resume.basics.phone + "'>" + resume.basics.phone + "</a>";
		}
		if (resume.basics.email) {
			if (contact) contact += " • ";
			contact += "<a href='mailto:" + resume.basics.email + "'>" + resume.basics.email + "</a>";
		}
		if (resume.basics.location) {
			let location = resume.basics.location.address || "";
			if (location && resume.basics.location.postalCode) location += ", ";
			location += resume.basics.location.postalCode || "";
			if (location && resume.basics.location.city) location += ", ";
			location += resume.basics.location.city || "";
			if (location && resume.basics.location.region) location += ", ";
			location += resume.basics.location.region || "";
			if (location && resume.basics.location.countryCode) location += ", ";
			location += resume.basics.location.countryCode || "";
			if (contact && location) contact += " • ";
			if (location) contact += location;
		}
		if (resume.basics.url) {
			if (contact) contact += " • ";
			contact += "<a href='" + resume.basics.url + "'>" + resume.basics.url + "</a>";
		}
		if (resume.basics.profiles) {
			for (let profile of resume.basics.profiles) {
				if (profile.url) {
					if (contact) contact += " • ";
					contact += "<a href='" + profile.url + "'>" + profile.url + "</a>";
				}
			}
		}
		if (contact) {
			body += "<p>" + contact + "</p>";
		}
		if (resume.basics.summary) {
			description = resume.basics.summary;
			body += "<h3>Summary</h3>";
			body += "<p>" + resume.basics.summary + "</p>";
		}
	}
	if (resume.work) {
		body += "<h3>Work Experience</h3>";
		for (let item of resume.work) {
			body += "<p>";
			if (item.position) {
				body += "<b>" + item.position + "</b>, ";
			}
			if (item.name) {
				if (item.url) {
					body += "<a href='" + item.url + "'>" + item.name + "</a>, ";
				} else {
					body += item.name + ", ";
				}
			}
			body += getDates(item);
			body += "</p>";
			if (item.summary) {
				body += "<p>" + item.summary + "</p>";
			}
			if (item.highlights) {
				body += "<ul>";
				for (let highlight of item.highlights) {
					body += "<li>" + highlight + "</li>";
				}
				body += "</ul>";
			}
		}
	}
	return base.replace("{title}", title).replace("{description}", description).replace("{body}", body);
}

function getDates(item) {
	let dates = item.startDate || "Unknown";
	dates += " - ";
	dates += item.endDate || "Present";
	return dates;
}

const base = String.raw`<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<title>{title}</title>
		<meta charset="utf-8">
		<meta name="description" content="{description}">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
	<body>
		{body}
	</body>
</html>`;

module.exports = {
	render: render
};
