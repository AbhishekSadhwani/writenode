import { Route, Routes } from "react-router-dom";
import { HomePage, CreatePostPage, PageNotFound } from "../Pages";

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePostPage />} />
            <Route path="/*" element={<PageNotFound />} />
        </Routes>
    )
}
