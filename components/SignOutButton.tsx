"use client";

import { signOut } from "@/lib/actions/auth.action";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { LogOut } from "lucide-react";

const SignOutButton = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOut();
            toast.success("Signed out successfully");
            router.push("/sign-in");
        } catch (error) {
            console.error("Error signing out:", error);
            toast.error("Failed to sign out");
        }
    };

    return (
        <Button
            variant="ghost"
            className="gap-2 text-primary-100 hover:text-primary-500 hover:bg-dark-400"
            onClick={handleSignOut}
        >
            <LogOut size={20} />
            Sign Out
        </Button>
    );
};

export default SignOutButton;
