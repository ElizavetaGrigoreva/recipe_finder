# Recipe Finder

Recipe Finder is a modern web application that helps you discover recipes using ingredients you already have. It uses the Spoonacular Food API to search recipes, display matching results, and provide complete cooking instructions.

---

# Features

* Search recipes by available ingredients
* Browse recipes on a dedicated results page
* View recipe details
* Full ingredient list
* Step-by-step cooking instructions
* Recipe images
* Preparation time
* Servings
* Search history
* Responsive design
* Powered by the Spoonacular Food API

---

# Project Structure

```text
Recipe-Finder/
│
├── index.html          # Search page
├── results.html        # Search results
├── recipe.html         # Recipe details
│
├── app.js
├── api.js
├── results.js
├── recipe.js
├── recipeCard.js
├── searchHistory.js
├── favorites.js
├── storage.js
├── filters.js
├── config.js
│
├── style.css
├── package.json
└── README.md
```

---

# Requirements

* Node.js (LTS)
* npm
* Internet connection
* Spoonacular API Key

---

# Getting a Spoonacular API Key

1. Create an account on Spoonacular.
2. Open the API Dashboard.
3. Copy your API Key.
4. Open:

```text
config.js
```

Replace:

```javascript
export const API_KEY = "YOUR_API_KEY_HERE";
```

with:

```javascript
export const API_KEY = "YOUR_REAL_API_KEY";
```

---

# Installation

Open a terminal inside the project folder.

Install the dependencies:

```bash
npm install
```

---

# Running the Project

Start the development server:

```bash
npm run dev
```

You should see something similar to:

```text
VITE v5.x.x ready

Local:
http://localhost:5173/
```

Open that address in your browser.

---

# If localhost Doesn't Work

Try:

```text
http://127.0.0.1:5173
```

instead.

---

# VPN Users

Some VPNs block local development servers.

If the website doesn't open while connected to a VPN, run Vite using:

```bash
npm run dev -- --host 0.0.0.0
```

Then open the address shown under **Network**.

If necessary, disconnect the VPN temporarily or enable local network access in your VPN settings.

---

# How to Use

## Step 1

Open the application.

You'll be presented with the search page.

---

## Step 2

Enter one or more ingredients.

Example:

```text
chicken, tomato, rice
```

Click:

```text
Search Recipes
```

---

## Step 3

The application searches Spoonacular and redirects to the Results page.

There you'll find recipe cards showing:

* Image
* Recipe name
* Matching ingredients
* Missing ingredients

---

## Step 4

Click **View Recipe**.

The application opens the Recipe Details page.

---

## Step 5

The Recipe Details page displays:

* Recipe image
* Preparation time
* Cooking time
* Servings
* Complete ingredient list
* Step-by-step cooking instructions

---

# Application Flow

```text
Search Page
(index.html)

        │

        ▼

Results Page
(results.html)

        │

        ▼

Recipe Details
(recipe.html)
```

---

# Troubleshooting

## npm is not recognized

Install Node.js and restart your computer.

---

## Blank Page

Open Developer Tools (F12).

Check the Console for JavaScript errors.

---

## Failed to Fetch

Possible causes:

* Incorrect API key
* No internet connection
* Spoonacular API unavailable

---

## 401 Unauthorized

Your API key is invalid.

Verify the value in:

```text
config.js
```

---

## No Recipes Found

Possible reasons:

* Ingredient spelling
* No matching recipes
* API limit reached

---

## localhost Doesn't Open

Try:

```text
http://127.0.0.1:5173
```

or

```bash
npm run dev -- --host
```

---

## Do NOT Open index.html Directly

Always run:

```bash
npm install

npm run dev
```

Never launch the application by double-clicking `index.html`, because JavaScript modules require a local development server.

---

# Future Improvements

* User authentication
* Shopping list
* Nutritional information
* Favorite recipes
* Meal planner
* Dark mode
* Cuisine filters
* Dietary filters
* Infinite scrolling
* Pagination
* AI-powered recipe recommendations

---

# License

MIT License

---

# Credits

Recipe data provided by the Spoonacular Food API.
