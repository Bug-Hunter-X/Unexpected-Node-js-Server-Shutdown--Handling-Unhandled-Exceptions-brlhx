# Unexpected Node.js Server Shutdown: Handling Unhandled Exceptions

This repository demonstrates a common yet often overlooked issue in Node.js: unexpected server shutdown due to unhandled exceptions.  The `bug.js` file showcases a server vulnerable to this problem.  The `bugSolution.js` file presents a robust solution using error handling to prevent unexpected closures.

## Problem

The `bug.js` file creates a simple HTTP server. However, it lacks proper error handling. If an unhandled exception occurs within the request listener, the server will abruptly shut down, potentially leaving clients with incomplete responses.  This is particularly problematic in production environments where server uptime is crucial.

## Solution

The `bugSolution.js` file addresses this issue by implementing comprehensive error handling.  It uses a `try...catch` block to gracefully handle exceptions within the request listener. If an error occurs, the client receives an appropriate error response instead of a server crash.  Furthermore, the server remains operational allowing it to handle subsequent requests.

## How to Run

1.  Clone this repository.
2.  Navigate to the repository's directory.
3.  Run `node bug.js` to experience the unexpected server shutdown (you'll likely need to restart the server to fully appreciate the abrupt shutdown).
4.  Run `node bugSolution.js` to see the improved, robust solution.

This example highlights the importance of implementing robust error handling for creating stable and reliable Node.js applications.