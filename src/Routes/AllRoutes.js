import { Route, Routes } from "react-router-dom";
import { HomePage, CreatePostPage, PageNotFound } from "../Pages";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<ProtectedRoutes><CreatePostPage /></ProtectedRoutes>} />
            <Route path="/*" element={<PageNotFound />} />
        </Routes>
    )
}
