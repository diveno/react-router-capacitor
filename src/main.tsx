import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./index.css";
import Contact from "./pages/Contact.tsx";
import EditNews from "./pages/EditNews.tsx";
import News from "./pages/News.tsx";
import NewsIndex from "./pages/NewsIndex.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="contact" element={<Contact />} />
        <Route path="news">
          <Route index element={<NewsIndex />} />
          <Route path=":news" element={<News />} />
          <Route path=":news/edit" element={<EditNews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
