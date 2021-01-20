$(
    $.getJSON('http://api.allorigins.win/get?url=https%3A//top.fh-ooe.at/events/feed/&callback=?', function(data) {
        // $('#output').html(data.contents);
        xmlContent = $.parseXML(data.contents);
        $(xmlContent)
            .find("item")
            .each(function() {
                const el = $(this);
                const title = el.find("title").text();
                const description = el.find("description").text();
                const link = el.find("link").text();

                let template = `
                <article>
                    <h2>
                    <a href="${link}" target="_blank" rel="noopener">
                        ${title}
                    </a>
                    </h2>
                `;
                if (description != '') {
                    template += `<p>${description}</p>`;
                }
                template += `</article>`;

                document.body.insertAdjacentHTML("beforeend", template);
            });
    })
);