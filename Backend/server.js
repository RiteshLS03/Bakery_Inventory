// require("express-async-errors");
const connection = require("./connection");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
// const bodyParser = require("body-parser");
// app.use(bodyParser);
// app.use((err, req, res, next) => {
//   res.status(err.status || 500).send("Something went wrong");
// });

// console.log(connection.query("SELECT * FROM TABLE ingredients"));

app.use(express.json()); // Stucked here for 2 hours // MIDDLEWARE

app.get("/", (_, res) => {
  return res.json("From the backend side");
});
//GET ALL INGREDIENTS
app.get("/ingredients", async (req, res) => {
  connection.query("SELECT * FROM ingredients", (err, data) => {
    if (err) console.log(err);
    else {
      res.send(data);
    }
  });
});
// TO GET ONE SINGLE INGREDIENT
app.get("/ingredients/:id", async (req, res) => {
  connection.query(
    "SELECT * FROM ingredients WHERE id=?",
    [req.params.id],
    (err, data) => {
      if (err) console.log(err);
      else {
        res.send(data);
      }
    }
  );
});
// TO DELETE AN INGREDIENT
app.delete("/ingredients/:id", async (req, res) => {
  connection.query(
    "DELETE FROM ingredients WHERE id=?",
    [req.params.id],
    (err, data) => {
      if (err) console.log(err);
      else {
        res.send(data);
      }
    }
  );
});
// TO INSERT AN INGREDIENT
// app.post("/ingredients", (req, res) => {
//   const addIngData = req.body;
//   console.log(addIngData);
//   connection.query(
//     "INSERT INTO ingredients(ingredient_name, ingredient_unit, ingredient_quantity) VALUES (?, ?, ?)",
//     [
//       addIngData.ingredient_name,
//       addIngData.ingredient_unit,
//       addIngData.ingredient_quantity,
//     ],
//     (err, data) => {
//       if (err) console.log(err);
//       else {
//         res.send(data);
//       }
//     }
//   );
// });
// TO INSERT AN INGREDIENT
app.post("/ingredients", (req, res) => {
  const addIngData = req.body;
  console.log(addIngData);
  // res.send(addIngData);

  connection.query(
    "INSERT INTO ingredients (ingredient_name, ingredient_unit, ingredient_quantity,purchase_date,expiry_date) VALUES (?, ?, ?, ?, ?)",
    [
      req.body.addName,
      req.body.addUnit,
      req.body.addQuantity,
      req.body.addPurchaseDate,
      req.body.addExpiryDate,
    ],
    (err, data) => {
      if (err) {
        console.error("Error inserting ingredient:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        console.log("Ingredient inserted successfully:", data);
        res
          .status(201)
          .json({ message: "Ingredient inserted successfully", data });
      }
    }
  );
});

//TO UPDATE AN INGREDIENT
app.patch("/ingredients", async (req, res) => {
  connection.query(
    "UPDATE ingredients SET ingredient_quantity = ? + ? WHERE id = ?",
    [req.body.ingredient_quantity, req.body.inputOfAdd, req.body.id],
    (err, data) => {
      if (err) {
        console.error("Error updated ingredient:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        console.log("Ingredient updated successfully:", data);
        res
          .status(201)
          .json({ message: "Ingredient updated successfully", data });
      }
    }
  );
});

//TO DEDUCT INGREDEINT FROM INVENTORY
app.patch("/ingredients", async (req, res) => {
  // connection.query(
  //   "UPDATE ingredients SET ingredient_quantity = ? - ? ,",
  //   [req.body.ingredient_quantity, req.body.ingredients],
  //   (err, data) => {
  //     if (err) {
  //       console.error("Error updated ingredient:", err);
  //       res.status(500).json({ error: "Internal Server Error" });
  //     } else {
  //       console.log("Ingredient updated successfully:", data);
  //       res
  //         .status(201)
  //         .json({ message: "Ingredient updated successfully", data });
  //     }
  //   }
  // );
  // const ingredient = req.body.ingredient_name;
  const ingredientsData = req.body.ingredients.ingredients;
  console.log(ingredientsData);
  // console.log(Object.entries(ingredients_Data).forEach([ingredient, quantity]));
  // Object.entries(ingredients_Data).forEach(([ingredient, quantity]) => {
  //   // console.log();
  //   connection.query(
  //     "UPDATE ingredients SET quantity_used = quantity_used + ? WHERE ingredient_name = ?"
  //   ),
  //     [quantity, ingredient],
  //     (err, data) => {
  //       if (err) {
  //         console.error(`Error updating ${ingredient}:`, err);
  //       } else {
  //         console.log(`${ingredient} updated successfully:`, data);
  //       }
  //     };
  // });

  // AI

  // Object.entries(ingredientsData).forEach(([ingredient, quantity]) => {
  //   connection.query(
  //     "UPDATE ingredients SET quantity_used = quantity_used + ? WHERE ingredient_name = ?",
  //     [quantity, ingredient],
  //     (err, data) => {
  //       if (err) {
  //         console.error(`Error updating ${ingredient}:`, err);
  //       } else {
  //         console.log(`${ingredient} updated successfully:`, data);
  //       }
  //     }
  //   );
  // });
  Object.entries(ingredientsData).forEach(([ingredient, quantity]) => {
    connection.query(
      "UPDATE ingredients SET quantity_used = quantity_used + ? WHERE ingredient_name = ?",
      [quantity, ingredient],
      (err, updateResult) => {
        if (err) {
          console.error(`Error updating ${ingredient}:`, err);
        } else {
          console.log(`${ingredient} updated successfully`);

          // Fetch the updated data for the ingredient
          connection.query(
            "SELECT * FROM ingredients WHERE ingredient_name = ?",
            [ingredient],
            (selectErr, selectResult) => {
              if (selectErr) {
                console.error(
                  `Error fetching updated data for ${ingredient}:`,
                  selectErr
                );
              } else {
                console.log(`${ingredient} updated data:`, selectResult);
              }
            }
          );
        }
      }
    );
  });
});

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000");
});
