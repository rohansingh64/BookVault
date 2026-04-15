# BookVault - Book Explorer App


Live Demo - https://bookexplorerplatform.netlify.app/

GitHub - https://github.com/rohansingh64/BookVault

---

## What is this app

It is a book explorer app where you can browse and search for books.

The data comes from the Open Library API. It is completely free and needs no API key.

When the app opens you see popular fiction books on the homepage.

You can search any book by typing in the search bar at the top.

Clicking on a book card opens a detail page with full information about that book.

---

## Features

Search works with a debounce of 500ms so it does not spam the API on every keypress.

Each book card shows the cover image, title, author, rating, year, and subjects.

The detail page shows the description, opening line, subjects, edition count, and a link to Open Library.

While data is loading you see skeleton cards with a shimmer effect instead of a blank screen.

If the API fails you see an error message with a retry button.

If search returns nothing you see an empty state message.

The app works on mobile, tablet, and desktop screens.

---

## Technologies used

React 19 for building the UI.

Tailwind CSS version 3 for styling and responsive design.

React Router DOM for navigation between home page and detail page.

Open Library API for all the book data.

---

## How the folders are organized

src/components has all the UI components like Navbar, BookCard, BookGrid, Hero, Footer, SkeletonGrid, ErrorState and EmptyState.

src/hooks has one custom hook called useBooks which handles all the data fetching and state.

src/utils has the api file where all the API calls are written.

src/pages has two files. HomePage and BookDetailPage.

---

## State management

I used a custom hook called useBooks instead of Redux because the app is small and a hook is enough.

The hook manages the books list, loading state, error state, search query, and pagination all in one place.

Components just receive data from this hook and focus only on showing things on screen.

---

## API details

Homepage calls the search endpoint with a popular fiction query sorted by rating.

Search bar calls the same endpoint with whatever the user typed.

Book detail page calls the works endpoint using the book key to get description and opening line.

Cover images come from the Open Library covers endpoint using the cover ID.

---

## How to run locally

Clone the repo and go into the folder.

Run npm install.

Run npm start.

It opens at localhost 3000 in your browser.

---

## Deployment

I deployed it on Netlify by connecting my GitHub repo.

Build command is npm run build and publish directory is build.

I also added a file called _redirects inside the public folder with this line inside it.

/* /index.html 200

This is needed so that React Router works properly on Netlify when you refresh on the detail page.

---

## Some limitations

Some books do not have a description on Open Library so the detail page shows a message for that.

Some books do not have a cover image so a placeholder is shown instead.

Many books do not have ratings because not enough people rated them on Open Library.