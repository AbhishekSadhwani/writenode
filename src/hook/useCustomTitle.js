import { useEffect } from "react";

export const useCustomTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - WriteNode`;
    },[title])
    return null;
}
