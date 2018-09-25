## Backend Technical Test

You have been asked to implement a __REST API__ that allows its consumers to create *articles*. Each *article* has a `title`, `content`, `author's name`, `date created` and `date updated`.

### Functional requirements

1. Implement an endpoint to *create* an article
2. Implement an endpoint to *get all* articles (paginated)

### Non functional Requirements

1. Implement using **JavaScript ES6**
2. Test coverage using any testing framework (TDD or BDD)
3. Use a **NoSQL** datastore (any)
4. Write instructions of how to run the application in `README.md`

### Bonus Features:

1. Implement an endpoint to *search* articles by *author's name* and/or *title*.
2. Use **Typescript**.
3. Use **mocha** and **chai** for testing.
4. Use **MongoDB** as datastore.

### Running the solution

1. Clone this repo.
2. cd in to the repo.
3. Install the node modules by running `npm i`
4. Run the project using `node index.js`
5. Go to the URL `http://localhost:3000/api/articles`

### API

1. Create Article:  `POST /api/articles`

    Sample curl command to post article.

    `curl -v -H "Content-Type: application/json" -XPOST --data "{\"title\":\"Sample title\", \"content\":\"Sample content\", \"author\":\"Sample author\", \"dateCreated\":\"2018-09-25T12:42:39.327Z\", \"dateUpdated\":\"2018-09-25T12:42:39.327Z\"}" localhost:3000/api/articles`


2. Get all Articles: `GET /api/articles`

3. Pagination: `GET /api/articles?page={PAGE_NUM}`

    Ex: `GET http://localhost:3000/api/articles?page=1`

4. Search by authorName or title or both: 

    1. By authorName: `GET /api/articles?author=Sample author`
    2. By title: `GET /api/articles?title=Sample title4`
    3. By authorName and title: `GET /api/articles?author=Sample author3&title=Sample title4`