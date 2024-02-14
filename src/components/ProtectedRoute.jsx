import { RedirectToSignIn, SignIn, SignedOut } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    return (
        <React.Fragment>
            <SignIn>{children ? children : <Outlet />}</SignIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </React.Fragment>
    );
};

export default ProtectedRoute;