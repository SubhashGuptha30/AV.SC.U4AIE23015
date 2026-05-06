import { Log } from "./services/loggerService";

async function testLogger() {
    await Log(
        "backend",
        "info",
        "service",
        "Logging middleware initialized successfully"
    );
}

testLogger();