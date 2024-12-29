# Music Player Application

## Overview
This project is a web-based music player application with a colorful UI and dynamic functionality. It features play/pause controls, next/previous navigation, a gradient background, and seamless integration of static assets like music files and images. The application is powered by a Node.js server for serving assets and managing routes.

## Features
- Play/Pause button functionality
- Next and Previous track navigation
- Volume control and progress display
- Fully responsive design with a gradient background
- Dynamic playlist support using Node.js
- Easily deployable and version-controlled on GitHub

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js with Express

## Setup Instructions

### Prerequisites
- Node.js installed on your system
- Git installed for version control

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/saurabhgautam56/simple-music-player.git
   cd simple-music-player
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Server**
   ```bash
   node server.js
   ```
   The application will be accessible at `http://localhost:3000`.

4. **Add Music and Assets**
   - Place audio files in the `public/assets/music/` directory.
   - Place images in the `public/assets/images/` directory.

### Folder Structure
```
project-folder
├── public
│   ├── assets
│   │   ├── music
│   │   └── images
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server.js
├── package.json
└── .gitignore
```

## Deployment
You can deploy this application using platforms like **Heroku** for full-stack hosting or **GitHub Pages** for static files.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contributions
Feel free to contribute by submitting issues or pull requests. Ensure that your code follows proper standards and is well-documented.

## Contact
For any inquiries or support, contact [saurabhgautam567801@gmail.com].
