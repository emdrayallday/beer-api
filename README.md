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

```
POST /beer

{
  'name': "Allagash White",
  'style': 'Wheat',
  'abvPCT': 5.1,
  'brewId: 'brewery_allagash-brewing-company',
  'tasty': true
  'type': 'beer'
}
```

A successfully created beer will result in a `201 - Created` response and the beer document will be returned in the response body which will include the `_id` and `_rev` props.

```
{
  '_id': "beer_allagash-white"
  '_rev': "1-aa1234j5klkk32l"
  'name': "Allagash White",
  'style': 'Wheat',
  'abvPCT': 5.1,
  'brewId: 'brewery_allagash-brewing-company',
  'tasty': true,
  'type': 'beer'
}
```

## Create a brewery

Create a brewery via `POST` TO THE `/breweries` endpoint passing a brewery JSON object in the request body.

```
POST /breweries

{
  'name': "Allagash Brewing Company",
  'opened': 1995,
  'location': "Portland, Maine",
  'type': 'brewery'
}
```

A successfully created brewery will result in a `201 - Created` response and the brewery document will be returned in the response body with an `_id` and `_rev` prop.

```
{
  '_id': "brewery_allagash-brewing-company",
  '_rev': "1-2341234dsfas4gadf3",
  'name': "Allagash Brewing Company",
  'opened': 1995,
  'location': "Portland, Maine",
  'type': 'brewery'
}
```
