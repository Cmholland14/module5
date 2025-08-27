const express = require("express");
const router = express.Router();

const friends = [
  { id: 1, name: "Phoebe", gender: "female" },
  { id: 2, name: "Joey", gender: "male" },
  { id: 3, name: "Chandler", gender: "male" },
  { id: 4, name: "Monica", gender: "female" },
  { id: 5, name: "Ross", gender: "male" },
  { id: 6, name: "Rachael", gender: "female" },
];

// 1. Filter route
// Example: /friends/filter?gender=male  OR  /friends/filter?letter=R
router.get("/filter", (req, res) => {
  let filterGender = req.query.gender;
  let filterLetter = req.query.letter;
  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender === filterGender
    );
  }
  if (filterLetter) {
    matchingFriends = matchingFriends.filter((friend) =>
      friend.name.startsWith(filterLetter)
    );
  }

  if (matchingFriends.length > 0) {
    res.status(200).json(matchingFriends);
  } else {
    res.status(404).json({ error: "No friends matched your filter" });
  }
});

// 2. Get specific headers
router.get("/info", (req, res) => {
  const { "user-agent": userAgent, "content-type": contentType, accept } =
    req.headers;

  res.json({
    "user-agent": userAgent,
    "content-type": contentType,
    accept: accept,
  });
});

// 3. Dynamic request param endpoint
router.get("/:id", (req, res) => {
  let friendId = parseInt(req.params.id);
  let friend = friends.find((f) => f.id === friendId);

  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({ error: "Friend not found" });
  }
});

// 4. Add a new friend
router.post("/", (req, res) => {
  let newFriend = req.body;

  if (!newFriend.name || !newFriend.gender) {
    res
      .status(400)
      .json({ error: "Friend object must contain a name and gender" });
    return;
  }
  if (!newFriend.id) {
    newFriend.id = friends.length + 1;
  }

  friends.push(newFriend);
  res.status(201).json(newFriend);
});

// 5. Update friend (PUT)
router.put("/:id", (req, res) => {
  let friendId = parseInt(req.params.id);
  let index = friends.findIndex((f) => f.id === friendId);

  if (index !== -1) {
    friends[index] = { ...friends[index], ...req.body };
    res.json(friends[index]);
  } else {
    res.status(404).json({ error: "Friend not found" });
  }
});

module.exports = router;
