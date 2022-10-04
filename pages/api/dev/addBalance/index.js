import { db } from "../../../../services/firebaseServicesAdmin";
import Web3 from "web3";
import artifact from "../../../../contracts/abis/blockheadNFTs.json";

const contractAddress = "0x0433f132Adf26Ef4368C55C8eC8582C88B35A5a5";

const results = [
  {
    player: "Steven Stix",
    score: 130,
  },
  {
    player: "Zach Clifton",
    score: 180,
  },
  {
    player: "Austin Lewis",
    score: 160,
  },
  {
    player: "Scott Reaves",
    score: 130,
  },
  {
    player: "Corey Jackson",
    score: 90,
  },
  {
    player: "Wyatt Shields",
    score: 440,
  },
  {
    player: "Jackson Reese",
    score: 310,
  },
  {
    player: "Ricky Reynolds",
    score: 450,
  },
  {
    player: "Declan Arbour",
    score: 280,
  },
  {
    player: "Marcus Dawson",
    score: 220,
  },
  {
    player: "Zeke Calabrese",
    score: 224,
  },
  {
    player: "Callum Clarke",
    score: 320,
  },
  {
    player: "Dale McDowell",
    score: 260,
  },
  {
    player: "Lukas Sundberg",
    score: 300,
  },
  {
    player: "Conrad Simmons",
    score: 230,
  },
  {
    player: "Joseph Byrne",
    score: 190,
  },
  {
    player: "Vladimir Mikhailov",
    score: 216,
  },
  {
    player: "Braxton Murray",
    score: 50,
  },
  {
    player: "Andy Adams",
    score: 140,
  },
  {
    player: "Riley Carlson",
    score: 90,
  },
  {
    player: "Marv Wilson",
    score: 130,
  },
  {
    player: "Ivan Rasputin",
    score: 70,
  },
  {
    player: "Logan Ross",
    score: 88,
  },
  {
    player: "Tanner Keene",
    score: 90,
  },
  {
    player: "Spencer Jones",
    score: 100,
  },
  {
    player: "Jeremy Preston",
    score: 40,
  },
  {
    player: "Seth Kaufmann",
    score: 100,
  },
  {
    player: "Jeff O'Shaughnessy",
    score: 124,
  },
  {
    player: "Jake Kelley",
    score: 430,
  },
  {
    player: "Brandon Beauty",
    score: 390,
  },
  {
    player: "Alexei Volkov",
    score: 490,
  },
  {
    player: "C.J. Richards",
    score: 260,
  },
  {
    player: "Doug Reed",
    score: 240,
  },
  {
    player: "Brent Gauthier",
    score: 212,
  },
  {
    player: "Max Kellogg",
    score: 88,
  },
];

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      results.map((result) => {
        db.ref(`bhl-2022-1-roster`)
          .orderByChild("name")
          .equalTo(result.player)
          .on("child_added", async (data) => {
            const ids = data.val().ids.split("\n");
            ids.map(async (id) => {
              db.ref("bhl-2022-1-blockheads")
                .child(parseInt(id) - 1)
                .once("value")
                .then((snapShot) => {
                  if (snapShot.exists()) {
                    let blockhead = snapShot.val();
                    db.ref(
                      `${
                        process.env.BHS_USERS_COLLECTION_URL
                      }/${blockhead.owner.toUpperCase()}`
                    )
                      .once("value")
                      .then((snapShot) => {
                        if (snapShot.exists()) {
                          console.log(snapShot.val());
                          let userObject = snapShot.val();
                          console.log(userObject);
                          let currentBalance = userObject?.balance;
                          console.log(currentBalance);
                          db.ref(`${process.env.BHS_USERS_COLLECTION_URL}`)
                            .child(blockhead.owner.toUpperCase())
                            .update({
                              balance: currentBalance + result.score,
                            });
                        } else {
                          console.log("No data available");
                          db.ref(`${process.env.BHS_USERS_COLLECTION_URL}`)
                            .child(blockhead.owner.toUpperCase())
                            .set({
                              balance: result.score,
                            });
                        }
                      });
                  }
                });
            });
          });
      });
      res.status(200).json({ message: "done!" });
    } catch (error) {}
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
