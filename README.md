# Beer API

Welcome to the Beer API that tracks beers and their associated breweries through a /beer and /brewery endpoints.

It is a RESTful HTTP based API using JSON to represent the beers and breweries.

## HTTP Verbs

* `GET`
* `POST`
* `PUT`
* `DELETE`

## Endpoints

## Beer

## Create a beer

Create a beer via `POST` TO THE `/beer` endpoint passing a beer JSON object in the request body.

All of the fields are required which include `name`,`style`,`abvPCT`,`brewId`,`stars`

```
POST /beer

{
  'name': "Allagash White",
  'style': 'Wheat',
  'abvPCT': 5.1,
  'brewId: 'brewery_allagash-brewing-company',
  'stars': 3,
  'type': 'beer'
}
```

A successfully created beer will result in a `201 - Created` response and the beer document will be returned in the response body which will include the `_id`, `_rev`, and `type` props.

```
{
'ok': true,
'_id': 'beer_allagash-white'
'_rev': "1-aa1234j5klkk32l"
}
```

## Get a Beer

Retrieves a beer via `GET` to the `/beer/:id` parameter endpoint, passing the beerId to the request parameter.
Example:

```
GET/beer/beer_allagash-white
```

A successful GET will result in a `200 - OK` response and the beer doc will be returned in the response body.

Example:

```
{
  '_id': "beer_allagash-white"
  '_rev': "1-aa1234j5klkk32l"
  'name': "Allagash White",
  'style': 'Wheat',
  'abvPCT': 5.1,
  'brewId: 'brewery_allagash-brewing-company',
  'stars': 3,
  'type': 'beer'
}
```

## Update a beer

Updates a beer within the collection of beer via `PUT` to the `/beer/:id` parameter endpoint, passing the beerId to the request parameter.

> Be sure to proved the most recent `_rev` value in the request body or you will receive a `409 - Conflict`

All of the fields are required which include `_id`,`_rev`,`name`,`style`,`abvPCT`,`brewId`,`stars`,`type`

Example:

```
PUT /beer/beer_allagash-White

{
  '_id': "beer_allagash-white"
  '_rev': "1-aa1234j5klkk32l"
  'name': "Allagash White",
  'style': 'Wheat',
  'abvPCT': 5.1,
  'brewId: 'brewery_allagash-brewing-company',
  'stars': 4,
  'type': 'beer'
}
```

If successful there will be a response of `200 - OK` and the response body will look like this:

```
{
  "ok": true,
  "id": "beer_allagash-white",
  "rev": "2-aa1234j5klkk32l"
}
```

## Delete a beer

Delete a beer via `DELETE` to the `/beer/:id`.

EXAMPLE:

```
DELETE /beer/beer_allagash-white
```

A successful delete will return with a `200 - OK` status and displayed in the response body will be:

```
{
"ok": true,
'_id': "beer_allagash-white"
'_rev': "1-aa1234j5klkk32l"
}
```

## Breweries

## Create a brewery

Create a brewery via `POST` TO THE `/breweries` endpoint passing a brewery JSON object in the request body.

All of the fields are required which include `name`,`style`,`abvPCT`,`brewId`,`stars`

```
POST /breweries

{
  'name': "Allagash Brewing Company",
  'opened': 1995,
  'city': "Portland",
  'state': "Maine",
  'type': 'brewery'
}
```

A successfully created brewery will result in a `201 - Created` response and the brewery document will be returned in the response body with an `_id`, `_rev` and `type` prop.

```
{
  "ok": true,
  "id": "brewery_allagash-brewing-company",
  "rev": "1-aa1234j5klkk32l"
}
```

## Get a brewery

Retrieves a brewery via `GET` to the `/breweries/:id` parameter endpoint, passing the breweryId to the request parameter.

Example:

```
GET/breweries/brewery_allagash-brewing-company
```

A successful GET will result in a `200 - OK` response and the brewery doc will be returned in the response body.

Example:

```
{
  '_id': "brewery_allagash-brewing-company",
  '_rev': "1-2341234dsfas4gadf3",
  'name': "Allagash Brewing Company",
  'opened': 1995,
  'city': "Portland",
  'state': "Maine",
  'type': 'brewery'
}
```

## Update a brewery

Updates a brewery within the collection of breweries via `PUT` to the `/breweries/:id` parameter endpoint, passing the breweryId to the request parameter.

> Be sure to proved the most recent `_rev` value in the request body or you will receive a `409 - Conflict`

All of the fields are required which include `_id`,`_rev`,`name`,`opened`,`city`,`state`,`type`

Example:

```
PUT /breweries/brewery_allagash-brewing-company
{
  '_id': "brewery_allagash-brewing-company",
  '_rev': "1-2341234dsfas4gadf3",
  'name': "Allagash Brewing Company",
  'opened': 1995,
  'city': "Portland",
  'state': "Maine",
  'type': 'brewery'
}
```

If successful there will be a response of `200 - OK` and the response body will look like this:

```
{
  "ok": true,
  "id": "brewery_allagash-brewing-company",
  "rev": "2-aa1234j5klkk32l"
}
```

## Delete a brewery

Delete a brewery via `DELETE` to the `/breweries/:id`.

EXAMPLE:

```
DELETE /breweries/brewery_allagash-brewing-company
```

A successful delete will return with a `200 - OK` status and displayed in the response body will be:

```
{
"ok": true,
'id': "brewery_allagash-brewing-company",
'rev': "1-2341234dsfas4gadf3",
}
```
