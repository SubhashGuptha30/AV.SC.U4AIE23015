import apiClient from "../config/apiClient";
import type {
    StackType,
    LevelType,
    PackageType,
} from "../types/logTypes";

export async function Log(
    stack: StackType,
    level: LevelType,
    logPackage: PackageType,
    message: string
): Promise<void> {
    try {
        const response = await apiClient.post("/logs", {
            stack,
            level,
            package: logPackage,
            message,
        });

        console.log(
            `[LOG SUCCESS] ${response.data.message}`
        );
    } catch (error: any) {
        console.error(
            `[LOG FAILURE] ${error?.response?.data?.message || error.message}`
        );
    }
}