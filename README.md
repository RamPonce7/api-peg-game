## Puzzle Algorithm

[TechMan](https://github.com/Techman), GitHub, 2022, [puzzle-pegs-ts](https://github.com/Techman/puzzle-pegs-ts).




# Deploy

```
git pull
docker build -t api-peg-game .
docker-compose down 
docker-compose up -d
```

# API

```
http://localhost:3030/api/v1/
```

## Get scores
```
GET /scores

Response:

[
    {
        "username": "John Doe",
        "score": 10
    }
]
```


## Create scores
```
POST /scores

{
    "username": "John Doe",
    "score": 10
}
```

## Get moves from a holePosition
``` 
GET /moves/:holePosition

Example: GET /moves/1

holePosition = 0-14


     0
    1 2
   3 4 5
  6 7 8 9
10 11 12 13 14


Response:

[
    [
        3, // from
        0, // to
        1  // over
    ]
]


```