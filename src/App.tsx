import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Hero from "./components/Hero.tsx"
import AppLayout from "./ui/AppLayout.tsx"
import Movie from "./Pages/movie/Movie.tsx"
import Tvshow from "./Pages/Tvshow/Tvshow.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "movie",
        element: <Movie />,
      },
      {
        path: "tvshow",
        element: <Tvshow />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
