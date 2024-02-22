import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { useNavigate } from "react-router-dom"

const AuthProvider = ({ children }) => {
    const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
    const navigate = useNavigate();

    return (
        <ClerkProvider  publishableKey={PUBLISHABLE_KEY} navigate={(to) => navigate(to)}>
            <ClerkLoaded>{children}</ClerkLoaded>
        </ClerkProvider>
    );
};

export default AuthProvider;