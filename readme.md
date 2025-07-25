# SecureSight Dashboard

This is a full-stack technical assessment for SecureSight, a fictional CCTV monitoring software company. The project consists of a Next.js frontend and an Express.js backend that displays and manages security incidents from multiple camera feeds.

**Live Demo:** [DEMO LINK](https://secure-sight-instinctive-studio-ass.vercel.app/)

## Frontend Functionalities

-   **Incident List:** Displays a list of unresolved and resolved incidents fetched from the backend.
-   **Optimistic UI:** When an incident's "Resolve" button is clicked, the UI updates instantly by moving the item between lists, providing a smooth user experience while the API request is processed in the background.
-   **Interactive Camera Panel:** Shows a main camera feed and smaller thumbnails for other cameras. Clicking a thumbnail makes it the main active feed.
-   **Animations:** Uses Framer Motion to animate the incident list when items are added or removed.
-   **Styled Components:** The UI is built with Tailwind CSS and custom styling to match the Figma design, including custom fonts, colors, and a background glow effect.

---

## Future Improvements

-   **Responsive Design:** The current design is focused on desktop. In the future, the layout will be made fully responsive to work on tablet and mobile devices.
-   **Video Integration (Extra Credit):** The current camera panel uses static images. A future enhancement would be to replace these with actual video streams or `.mp4` files.
-   **Cloud Storage for Thumbnails:** Currently, thumbnail images are stored locally in the `public` folder. In a production environment, these would be hosted on a dedicated static file server or a cloud storage service like AWS S3 or Cloudinary for better performance and scalability.

---

## Getting Started

Follow these instructions to get the project running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- A free [Supabase](https://supabase.com/) account for the PostgreSQL database.

### 1. Backend Setup

First, set up the Express API server.

1.  **Navigate to the backend directory:**
    ```sh
    cd backend
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    -   Create a new project on Supabase.
    -   In your Supabase project dashboard, go to **Settings > Database**.
    -   Find the **Connection string** and copy the URI. Make sure to use the **direct connection** string (port `5432`).
    -   Create a `.env` file in the `backend` directory by copying the `.env.example` file (if one exists) or creating it from scratch.
    -   Add your database connection string to the `.env` file:
        ```env
        # backend/.env
        DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@[...].supabase.co:5432/postgres"
        ```
    -   Replace `[YOUR-PASSWORD]` with your actual database password.

4.  **Run database migrations:**
    This command will set up the `Camera` and `Incident` tables in your Supabase database.
    ```sh
    npx prisma migrate dev
    ```

5.  **Seed the database:**
    This command will populate your database with sample cameras and incidents.
    ```sh
    npx prisma db seed
    ```

6.  **Start the backend server:**
    ```sh
    npm run dev
    ```
    The backend server will start on `http://localhost:3005` (or the port you've configured).

---

### 2. Frontend Setup

Next, set up the Next.js frontend application.

1.  **Navigate to the frontend directory:**
    ```sh
    cd ../frontend
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Start the frontend server:**
    ```sh
    npm run dev
    ```
    The frontend application will be available at `http://localhost:3000`.

---

## API Endpoints

The backend provides the following API endpoints.

### Get Incidents

-   **Endpoint:** `GET /api/incidents`
-   **Description:** Fetches a list of all incidents from the database. Can be filtered by their resolved status.
-   **Query Parameters:**
    -   `resolved` (optional): `true` or `false`. If omitted, returns all incidents.
-   **Success Response (200 OK):**
    ```json
    [
      {
        "id": 1,
        "cameraId": 13,
        "type": "Unauthorised Access",
        "tsStart": "2025-07-24T23:54:10.123Z",
        "tsEnd": "2025-07-24T23:55:10.123Z",
        "thumbnailUrl": "/thumbnails/thumb1.jpg",
        "resolved": false
      },
      ...
    ]
    ```

### Resolve an Incident

-   **Endpoint:** `PATCH /api/incidents/:id/resolve`
-   **Description:** Flips the `resolved` status of a specific incident. If it's `false`, it becomes `true`, and vice-versa.
-   **URL Parameters:**
    -   `id` (required): The ID of the incident to update.
-   **Success Response (200 OK):**
    Returns the complete, updated incident object.
    ```json
    {
      "id": 1,
      "cameraId": 13,
      "type": "Unauthorised Access",
      "tsStart": "2025-07-24T23:54:10.123Z",
      "tsEnd": "2025-07-24T23:55:10.123Z",
      "thumbnailUrl": "/thumbnails/thumb1.jpg",
      "resolved": true
    }
    ```

---

