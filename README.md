# cachie
# Cachie REST API Server

## Introduction

This project implements a REST API server for Cachie, an in-memory cache analytics engine using Map

## Requirements

- Node.js (version 18.16.1)
- npm (version 9.5.1)

## Installation

1. Clone the repository:

git clone https://github.com/your-username/cachie-api.git


2. Navigate to the project directory:

cd cachie


3. Install dependencies:

npm install


## Usage

1. Start the server:
    npm run start


2. The server will be running at http://localhost:3030 by default.

3. Use the following endpoints:

- POST /search: Accepts search queries.
Example payload: `{"search_query":"the quick brown fox jumps over the lazy dog"}`
- GET /analyse: Accepts analysis tokens.
Example query parameter: `https://localhost:3030/analysis_token=dGhlIHF1aWNrLHRoZQ==`

## Running Tests

1. Run unit tests:

npx jest test/queryCtrl.test.js
npx jest test/queryService.test.js


## Implementation Notes

- The implementation for the in-memory cache analytics engine stores data in a JavaScript object (Map).
- ...
