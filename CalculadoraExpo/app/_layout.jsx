import React from "react";
import { Slot } from "expo-router";
import { AppProvider } from "../scripts/AppContext";

export default layout = () => {
    return (
        <AppProvider>
            <Slot />
        </AppProvider>
    )
}