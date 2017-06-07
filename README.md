![](http://cvlassets.s3.amazonaws.com/OpenProcu.svg)
# Open Procure
## Welcome!

[![Join the chat at https://gitter.im/munirent/openprocure](https://badges.gitter.im/munirent/openprocure.svg)](https://gitter.im/munirent/openprocure?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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

:mount_fuji: Want to collaborate with others on a task?  Add it to **[Task Mountain][TM]** so other people can work on it!

[Open Procure]: http://openprocure.us
[Issues]: https://github.com/munirent/openprocure/issues
[PR]: https://github.com/munirent/openprocure/pulls
[Roadmap]: https://github.com/munirent/openprocure/wiki/Feature-Roadmap
[TM]: http://www.taskmountain.com/

<a name="search"></a>
### How to search for procurement thresholds

Procurement thresholds are not easily accessible through government websites, but the process can generally be expedited by using simple search terms or looking for navigation section headers such as `` "DOING BUSINESS WITH THE CITY" `` or `` PURCHASING RULES AND RESTRICTIONS `` Here are some tips on finding the proper thresholds:

+ First, use some basic boolean operators in a simple Google search. For example, if you're looking for the procurement thresholds for, say, Trenton, NJ, you'll enter something like ``"procurement threshold" AND "trenton" AND "NJ." `` (note: *the term 'procurement' may be substituted for 'purchasing' or 'departmental spending,' while 'threshold' could very likely be found entered as simply 'limits' or, less frequently, terms such as 'petty cash fund'*.) The same strategy is helpful if the governmental website in question has a strong in-site search bar.


+ It may be likely that the precise thresholds for bidding and discretionary spending do not appear readily in a visiible spot on a government's website in plain text. Often, you may need to search or browse to find a much longer document with a title along the lines of "Ethics Code" or "Financial Procedure Code." Almost always, these documents will be in PDF.

+ If you've found what appears to be a lengthy document of various government rules and codes, locating the procurement data can often be expedited  by using your browser's find text function (usually available by navigating in browser to ``Edit >> Find``). Using the find term field, enter words such as "purchasing" or "thresholds" or "discretionary." **Pro-tip: Searching for the dollar symbol ($) is a handy trick for locating precise threshold data in many cases.**

*More to be added to this section.*

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

Open your browser to http://localhost:4567 or http://127.0.0.1:4567

Edit files and the page will automatically refresh.

### To deploy changes

`rake deploy`

Or push to the master branch and let the auto-deploy do its thing.

## License

To the extent possible under law, [MuniRent](https://www.munirent.co) has waived all copyright and
related or neighboring rights to Open Procure. This work is published
from: United States.

[See LICENSE.txt](LICENSE.txt) for more details.
