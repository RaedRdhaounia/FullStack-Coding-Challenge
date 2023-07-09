# Project Name

fullstack-coding-challenge


## Overview

This project is a mobile application that allows users to browse and search for their favorite movies. It utilizes the Movie Database (TMDB) API to fetch movie data and provides features such as searching, viewing movie details, and adding movies to favorites.

## Features

- Browse top-rated movies
- Search for movies by title
- View movie details
- Add movies to favorites
- Persistent favorites storage using local storage
- Responsive design for different screen sizes

## Technologies Used

- React Native
- Redux Toolkit
- React Navigation
- Axios (for API requests)
- AsyncStorage (for local storage)
- TypeScript

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Follow the instructions to run the app on a simulator or device. [expo doc](https://docs.expo.dev/)
5. if you like to get a production .apk file cross this link [fullStack.apk](https://drive.google.com/file/d/1_F3SSJz0fjhtnv2tiyW785rqvjS5d2gF/view)

## Usage

1. Launch the app on your mobile device or simulator.
2. Browse the top-rated movies on the home screen.
3. Use the search bar to search for movies by title.
4. Tap on a movie to view its details.
5. Add movies to your favorites by tapping the "Add to Favorites" button.
6. Navigate to the favorites screen to view your favorite movies.

## Folder Structure

The project follows the following folder structure:

- `src`: Contains the source code files.
  - `assets`: Contains static assets such as images and fonts.
  - `components`: Contains reusable components used throughout the app.
  - `screens`: Contains the main screens of the app.
  - `redux`: Contains Redux-related files such as reducers and actions.
  - `api`: Contains API service files.
  - `utils`: Contains utility/helper functions.
  - `navigation`: Contains the navigation control
  - `hooks`: Contains the globals management as the header control Screens and favorite context
- `App.tsx`: The entry point of the app.

## Components

The project includes the following main components:

- `MovieList`: Renders a list of movies.
- `MovieCard`: Displays information about a movie.
- `SearchBar`: Allows users to search for movies by title.
- `MovieDetails`: Shows detailed information about a selected movie.
- `FavoritesScreen`: Displays the user's favorite movies.

## State Management

The app uses **Redux** Toolkit for state management. It includes the following slices:

- `movies`: Manages the list of top-rated movies.

The app uses **Context** for state management too. It includes the following context values:

- `favorites`: Manages the list of favorite list.
- `addToFavorites`: add a movie to storage.
- `removeFromFavorites`: remove a movie from the storage.


## API Integration

The app integrates with the Movie Database (TMDB) API to fetch movie data. It uses the `axios` library for making API requests.

## Testing

No specific testing framework or setup has been implemented in this project. However, you can use any testing framework of your choice to write tests for the components and Redux logic.

## Deployment

The app can be deployed to both iOS and Android devices through app distribution platforms like Expo.

## Troubleshooting

If you encounter any issues while running the app, please check the following:

- Ensure that all dependencies are installed correctly.
- Make sure you have a stable internet connection for API requests.
- Verify that the API keys are set up correctly.

If the issue persists, please open an issue on the GitHub repository for further assistance.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please contact us.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [React Native](https://reactnative.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Navigation](https://reactnavigation.org/)
- [TMDB API](https://www.themoviedb.org/documentation/api)

## Contact

For any inquiries or questions, please contact:
- [email](raedrdhaounia@gmail.com)
- [whatApp](+21651164297)
