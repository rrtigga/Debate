## Routes (GET):

- **/api/1/debate/[id]** = Get info for debate (title / pic / votes)
- **/api/1/debate/[id]/opinions** = Get opinion for debates (pro / con)
- **/api/1/opinions/[id]/votes** = Get vote for opinion (pro / con)
- **/api/1/opinions/trending** = Get trending opinions

## Routes (POST):
- **/api/1/debate/** = Add new debate subject to DB
- **/api/1/opinions/** = Add opinion to DB

## DB schemes:

- **Debates**
  - id
  - dateAdded
  - title
  - body
  - img
  - userID
- **Opinions**
  - id
  - debate_id
  - dateAdded
  - body
  - voteCount
  - user_id
- **Votes**
  - id
  - opinion_id
  - dateAdded
  - action (up or down)
  - user_id
