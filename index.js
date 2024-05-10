function render(resume) {
	let title = [];
	let description = "";
	let body = [];

	if (resume.basics) {
		if (resume.basics.image) {
			body.push("<img class='photo' src='" + resume.basics.image + "'>");
		}
		if (resume.basics.name) {
			title.push(resume.basics.name);
			body.push("<h1>" + resume.basics.name + "</h1>");
		}
		if (resume.basics.label) {
			title.push(resume.basics.label);
			body.push("<h2>" + resume.basics.label + "</h2>");
		}
		body.push("<br>");
		let contact = [];
		if (resume.basics.phone) {
			contact.push("<a href='tel:" + resume.basics.phone + "'>" + resume.basics.phone + "</a>");
		}
		if (resume.basics.email) {
			contact.push("<a href='mailto:" + resume.basics.email + "'>" + resume.basics.email + "</a>");
		}
		if (resume.basics.location) {
			let location = [];
			if (resume.basics.location.address) {
				location.push(resume.basics.location.address);
			}
			if (resume.basics.location.postalCode) {
				location.push(resume.basics.location.postalCode);
			}
			if (resume.basics.location.city) {
				location.push(resume.basics.location.city);
			}
			if (resume.basics.location.region) {
				location.push(resume.basics.location.region);
			}
			if (resume.basics.location.countryCode) {
				location.push(resume.basics.location.countryCode);
			}
			contact.push(location.join(", "));
		}
		if (resume.basics.url) {
			contact.push("<a href='" + resume.basics.url + "'>" + resume.basics.url + "</a>");
		}
		if (resume.basics.profiles) {
			for (let profile of resume.basics.profiles) {
				if (profile.url) {
					contact.push("<a href='" + profile.url + "'>" + profile.url + "</a>");
				}
			}
		}
		body.push("<p>");
		body.push("\t" + contact.join(" •\n\t\t\t"));
		body.push("</p>");
		body.push("<br>");
		if (resume.basics.summary) {
			description = resume.basics.summary;
			body.push("<h3>Summary</h3>");
			body.push("<br>");
			body.push("<p>" + resume.basics.summary + "</p>");
			body.push("<br>");
		}
	}

	if (resume.work) {
		body.push("<h3>Work Experience</h3>");
		body.push("<br>");
		for (let item of resume.work) {
			let label = [];
			if (item.position) {
				label.push("<b>" + item.position + "</b>");
			}
			if (item.name) {
				if (item.url) {
					label.push("<a href='" + item.url + "'>" + item.name + "</a>");
				} else {
					label.push(item.name);
				}
			}
			label.push(getDates(item));
			body.push("<p>");
			body.push("\t" + label.join(" •\n\t\t\t"));
			body.push("</p>");
			if (item.summary) {
				body.push("<p>" + item.summary + "</p>");
			}
			if (item.highlights) {
				body.push("<ul>");
				for (let highlight of item.highlights) {
					body.push("\t<li>" + highlight + "</li>");
				}
				body.push("</ul>");
			}
			body.push("<br>");
		}
	}

	if (resume.volunteer) {
		body.push("<h3>Volunteer Experience</h3>");
		body.push("<br>");
		for (let item of resume.volunteer) {
			let label = [];
			if (item.position) {
				label.push("<b>" + item.position + "</b>");
			}
			if (item.organization) {
				if (item.url) {
					label.push("<a href='" + item.url + "'>" + item.organization + "</a>");
				} else {
					label.push(item.organization);
				}
			}
			label.push(getDates(item));
			body.push("<p>");
			body.push("\t" + label.join(" •\n\t\t\t"));
			body.push("</p>");
			if (item.summary) {
				body.push("<p>" + item.summary + "</p>");
			}
			if (item.highlights) {
				body.push("<ul>");
				for (let highlight of item.highlights) {
					body.push("\t<li>" + highlight + "</li>");
				}
				body.push("</ul>");
			}
			body.push("<br>");
		}
	}

	if (resume.education) {
		body.push("<h3>Education</h3>");
		body.push("<br>");
		for (let item of resume.education) {
			let label = [];
			if (item.area) {
				label.push("<b>" + item.area + "</b>");
			}
			if (item.institution) {
				if (item.url) {
					label.push("<a href='" + item.url + "'>" + item.institution + "</a>");
				} else {
					label.push(item.institution);
				}
			}
			label.push(getDates(item));
			body.push("<p>");
			body.push("\t" + label.join(" •\n\t\t\t"));
			body.push("</p>");
			let summary = [];
			if (item.studyType) {
				summary.push(item.studyType);
			}
			if (item.score) {
				summary.push("Score: " + item.score);
			}
			if (summary.length > 0) {
				body.push("<p>" + summary.join(" • ") + "</p>");
			}
			if (item.courses) {
				body.push("<ul>");
				for (let course of item.courses) {
					body.push("\t<li>" + course + "</li>");
				}
				body.push("</ul>");
			}
			body.push("<br>");
		}
	}

	if (resume.awards) {
		body.push("<h3>Awards</h3>");
		body.push("<br>");
		for (let item of resume.awards) {
			let label = [];
			if (item.title) {
				label.push("<b>" + item.title + "</b>");
			}
			if (item.awarder) {
				label.push(item.awarder);
			}
			if (item.date) {
				label.push(item.date);
			}
			if (label.length > 0) {
				body.push("<p>" + label.join(" • ") + "</p>");
			}
			if (item.summary) {
				body.push("<p>" + item.summary + "</p>");
			}
			body.push("<br>");
		}
	}

	if (resume.certificates) {
		body.push("<h3>Certificates</h3>");
		body.push("<br>");
		for (let item of resume.certificates) {
			let label = [];
			if (item.name) {
				if (item.url) {
					label.push("<b><a href='" + item.url + "'>" + item.name + "</a></b>");
				} else {
					label.push("<b>" + item.name + "</b>");
				}
			}
			if (item.issuer) {
				label.push(item.issuer);
			}
			if (item.date) {
				label.push(item.date);
			}
			body.push("<p>");
			body.push("\t" + label.join(" •\n\t\t\t"));
			body.push("</p>");
			body.push("<br>");
		}
	}

	if (resume.publications) {
		body.push("<h3>Publications</h3>");
		body.push("<br>");
		for (let item of resume.publications) {
			let label = [];
			if (item.name) {
				if (item.url) {
					label.push("<b><a href='" + item.url + "'>" + item.name + "</a></b>");
				} else {
					label.push("<b>" + item.name + "</b>");
				}
			}
			if (item.publisher) {
				label.push(item.publisher);
			}
			if (item.releaseDate) {
				label.push(item.releaseDate);
			}
			body.push("<p>");
			body.push("\t" + label.join(" •\n\t\t\t"));
			body.push("</p>");
			if (item.summary) {
				body.push("<p>" + item.summary + "</p>");
			}
			body.push("<br>");
		}
	}

	if (resume.skills) {
		body.push("<h3>Skills</h3>");
		body.push("<br>");
		for (let item of resume.skills) {
			let label = [];
			if (item.name) {
				label.push("<b>" + item.name + "</b>");
			}
			if (item.level) {
				label.push(item.level);
			}
			if (label.length > 0) {
				body.push("<p>" + label.join(" • ") + "</p>");
			}
			if (item.keywords) {
				let keywords = [];
				for (let keyword of item.keywords) {
					keywords.push(keyword);
				}
				body.push("<p>");
				body.push("\t" + keywords.join(" •\n\t\t\t"));
				body.push("</p>");
			}
			body.push("<br>");
		}
	}

	if (resume.languages) {
		body.push("<h3>Languages</h3>");
		body.push("<br>");
		let languages = [];
		for (let item of resume.languages) {
			let language = [];
			if (item.language) {
				language.push("<b>" + item.language + "</b>");
			}
			if (item.fluency) {
				language.push("(" + item.fluency + ")");
			}
			languages.push(language.join(" "));
		}
		body.push("<p>");
		body.push("\t" + languages.join(" •\n\t\t\t"));
		body.push("</p>");
		body.push("<br>");
	}

	if (resume.projects) {
		body.push("<h3>Projects</h3>");
		body.push("<br>");
		for (let item of resume.projects) {
			let label = [];
			if (item.name) {
				if (item.url) {
					label.push("<b><a href='" + item.url + "'>" + item.name + "</a></b>");
				} else {
					label.push("<b>" + item.name + "</b>");
				}
			}
			label.push(getDates(item));
			body.push("<p>");
			body.push("\t" + label.join(" •\n\t\t\t"));
			body.push("</p>");
			if (item.description) {
				body.push("<p>" + item.description + "</p>");
			}
			if (item.highlights) {
				body.push("<ul>");
				for (let highlight of item.highlights) {
					body.push("\t<li>" + highlight + "</li>");
				}
				body.push("</ul>");
			}
			body.push("<br>");
		}
	}

	if (resume.interests) {
		body.push("<h3>Interests</h3>");
		body.push("<br>");
		for (let item of resume.interests) {
			if (item.name) {
				body.push("<p><b>" + item.name + "</b></p>");
			}
			if (item.keywords) {
				let keywords = [];
				for (let keyword of item.keywords) {
					keywords.push(keyword);
				}
				body.push("<p>");
				body.push("\t" + keywords.join(" •\n\t\t\t"));
				body.push("</p>");
			}
			body.push("<br>");
		}
	}

	if (resume.references) {
		body.push("<h3>References</h3>");
		body.push("<br>");
		for (let item of resume.references) {
			if (item.name) {
				body.push("<p><b>" + item.name + "</b></p>");
			}
			if (item.reference) {
				body.push("<p>" + item.reference + "</p>");
			}
			body.push("<br>");
		}
	}

	return base.replace("{title}", title.join(" - ")).replace("{description}", description).replace("{body}", body.join("\n\t\t"));
}

function getDates(item) {
	let dates = item.startDate || "Unknown";
	dates += " - ";
	dates += item.endDate || "Present";
	return dates;
}

const base = `<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<title>{title}</title>
		<meta charset="utf-8">
		<meta name="description" content="{description}">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<style>
			* {
				margin: 0;
				padding: 0;
			}
			body {
				max-width: 800px;
				margin: auto;
				padding: 16px;
				font-family: Helvetica, sans-serif;
				font-size: 16px;
				color: #444444;
				background-color: #ffffff;
			}
			h1 {
				font-size: 32px;
				font-weight: normal;
				text-align: center;
				text-decoration: none;
				text-transform: uppercase;
				margin-bottom: 8px;
			}
			h2 {
				font-size: 24px;
				font-weight: normal;
				text-align: center;
				text-decoration: none;
				text-transform: uppercase;
			}
			h3 {
				font-size: 24px;
				font-weight: normal;
				text-align: left;
				text-decoration: none;
				text-transform: uppercase;
			}
			ul {
				padding-left: 24px;
			}
			p, li {
				font-weight: normal;
				text-align: left;
				text-decoration: none;
				margin-bottom: 8px;
			}
			a {
				color: inherit;
				font-weight: inherit;
				text-decoration: underline;
				text-align: inherit;
				white-space: nowrap;
			}
			.photo {
				max-width: 25%;
				float: right;
				margin-left: 8px;
				margin-bottom: 8px;
			}
		</style>
	</head>
	<body>
		{body}
	</body>
</html>`;

module.exports = {
	render: render
};
