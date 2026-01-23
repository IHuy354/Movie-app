import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/query-client.ts";
import ScrollToTop from "./component/ScrollToTop.tsx";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";



createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <SkeletonTheme baseColor="#2a2a2a" highlightColor="#3a3a3a">
        <App />
      </SkeletonTheme>
    </QueryClientProvider>
  </BrowserRouter>,
);
