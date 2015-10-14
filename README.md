# Open Procure
## Welcome!

Open Procure is an **online open data repository of government purchasing information across the United States**.

Our goal is to make municipal, county-level, state and federal purchasing easily accessible for everyone. It is where government officials, technologists, and active citizens can work together to make our purchasing processes more transparent.

See it live at http://openprocure.us/

## How to contribute to this project

We welcome your help! There are several ways you can contribute:

* Use [Open Procure]! The more people use the information, the better.
* [Search for new agency thresholds](#search) and [add data](#add-data) to Open Procure
* Verify existing data and [create a GitHub issue if you find a mistake][Issues]
* Propose changes to the site or data by [creating a pull request][PR]

Visit our [GitHub Issues][Issues] page to see a list of open actionable items to fix on the site.

We have a [feature roadmap page][Roadmap]. Feature/ideas can be added there.

[Open Procure]: http://openprocure.us
[Issues]: https://github.com/munirent/openprocure/issues
[PR]: https://github.com/munirent/openprocure/pulls
[Roadmap]: https://github.com/munirent/openprocure/wiki/Feature-Roadmap

<a name="search"></a>
### How to search for procurement thresholds

Procurement thresholds are not easily accessible through government websites. Here are some tips on finding them.

*To be written*

<a name="add-data"></a>
### Adding data to Open Procure

[Edit `data/procurement.yaml` directly on GitHub][edit data].  When you submit your changes, GitHub will automatically create a pull request. After the team merges it, the live website will be updated automatically.  It takes about 1 min and you need to refresh your browser, but it is really that simple.  No further action required.

Always include a link to source of the procurement thresholds you are adding to make future verification easy.

[edit data]: https://github.com/munirent/openprocure/edit/master/data/procurement.yaml

#### When adding a PDF as a link

Make sure you append the page number at the end.  If I wanted to add a link to **page 2** of [this PDF](http://www.publishers.org.uk/_resources/assets/attachment/full/0/2091.pdf), I would add a `#page=2` at the end of the URL. e.g. `http://www.publishers.org.uk/_resources/assets/attachment/full/0/2091.pdf#page=2`

## Development

The website is hosted on GitHub pages.  The static HTML pages are in the gh-pages branch.

The website is generated using the Middleman tool. The Middleman template is in the master branch.

### To install

1. Clone repository
2. Install ruby and bundler for your system
3. `bundle install`

### To run in development

`middleman`

Open your browser to http://0.0.0.0:4567

Edit files and the page will automatically refresh.

### To deploy changes

`rake deploy`

Or push to the master branch and let the auto-deploy do its thing.

## License

To the extent possible under law, MuniRent has waived all copyright and
related or neighboring rights to Open Procure. This work is published
from: United States.

[See LICENSE.txt](LICENSE.txt) for more details.
